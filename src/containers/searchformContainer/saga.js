import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import {
  IMAGE_FETCH_REQUESTED,
  IMAGE_FETCH_SUCCEEDED,
  IMAGE_FETCH_FAILED } from './action';
import { getSearchValue } from './selector';

// flickr
const FLICKR_ID = '';

const fetchImgApi = (text, page = 1, sort = 'relevance') =>
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_ID}&text=${text}&page=${page}&sort=${sort}&format=json&nojsoncallback=1`);

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

function* fetchImg() {
  try {
    const searchValue = yield select(getSearchValue);
    const response = yield call(fetchImgApi, searchValue);
    const imgs = yield response.json();
    const imgsObject = getImgsObject(imgs.photos.photo);
    const imgsIdArray = Object.keys(imgsObject);
    yield put({ type: IMAGE_FETCH_SUCCEEDED, imgsObject, imgsIdArray });
  } catch (e) {
    yield put({ type: IMAGE_FETCH_FAILED, message: e.message });
  }
}

export function* imgSaga() {
  yield* takeLatest(IMAGE_FETCH_REQUESTED, fetchImg);
}
