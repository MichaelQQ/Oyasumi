import { takeLatest } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import {
  IMAGE_FETCH_REQUESTED,
  IMAGE_FETCH_SUCCEEDED,
  IMAGE_FETCH_FAILED } from './action';
import { getSearchValue, getLastSearchValue, getLastPage, getMaxPage } from './selector';

const apiServer = '//oyasumi.herokuapp.com/api/flickr';
// const apiServer = '//localhost:7788/api/flickr';
const generateImgSrc = (farm, server, id, secret) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

const getImgsObject = imgs =>
  imgs
    .map(img => ({
      [img.id]: {
        id: img.id,
        name: img.title,
        imgsrc: generateImgSrc(img.farm, img.server, img.id, img.secret),
      },
    }))
    .reduce((objAll, objNow) => ({
      ...objAll,
      ...objNow,
    }), {});

const getTargetPage = (pageNav, last, max) => {
  switch (pageNav) {
    case 'next':
      return last === max ? last : last + 1;
    case 'prev':
      return last === 1 ? last : last - 1;
    default:
      return 1;
  }
};

function* fetchImg(action) {
  try {
    let searchValue = '';
    let targetPage = 1;
    if (action.pageNav) {
      const lastPage = yield select(getLastPage);
      const currMaxPage = yield select(getMaxPage);
      searchValue = yield select(getLastSearchValue);
      targetPage = getTargetPage(action.pageNav, lastPage, currMaxPage);
    } else {
      searchValue = yield select(getSearchValue);
    }

    const response = yield fetch(apiServer, {
      method: 'post',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        method: 'flickr.photos.search',
        sort: 'relevance',
        text: searchValue,
        page: targetPage,
      }),
    });
    const imgs = yield response.json();
    const page = imgs.photos.page;
    const maxPage = imgs.photos.pages;
    const imgsObject = getImgsObject(imgs.photos.photo);
    const imgsIdArray = Object.keys(imgsObject);
    yield put({ type: IMAGE_FETCH_SUCCEEDED, imgsObject, imgsIdArray, page, maxPage });
  } catch (e) {
    yield put({ type: IMAGE_FETCH_FAILED, message: e.message });
  }
}

export function* imgSaga() {
  yield* takeLatest(IMAGE_FETCH_REQUESTED, fetchImg);
}
