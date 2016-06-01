import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import { whyDidYouUpdate } from 'why-did-you-update';
//
// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React);
// }

import App from './App.js';

const project = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        id: action.id,
        name: action.name,
        imgsrc: action.imgsrc,
        content: action.content,
        likes: 0,
      };
    case 'ADD_LIKE':
      return {
        ...state,
        likes: (state.likes + 1),
      };
    default:
      return state;
  }
};

const projects = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        [action.id]: project(undefined, action),
      };
    case 'ADD_LIKE':
      return {
        ...state,
        [action.id]: project(state[action.id], action),
      };
    case 'SET_PAGE':
      return {};
    default:
      return state;
  }
};

const projectId = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.id,
      ];
    case 'SET_PAGE':
      return [];
    default:
      return state;
  }
};

const objects = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return {
        ...state,
        [action.id]: action.id,
      };
    default:
      return state;
  }
};

const objectId = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return [
        ...state,
        action.id,
      ];
    default:
      return state;
  }
};

let searchTag;
const searchInfo = (state = {}, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return {
        ...state,
        tag: action.tag,
      };
    case 'SET_PAGE':
      return {
        ...state,
        maxPage: action.maxPage,
      };
    case 'SEARCH':
      searchTag(action.tag, action.page);
      return {
        ...state,
        tag: action.tag,
        page: action.page,
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  projects,
  projectId,
  objects,
  objectId,
  searchInfo,
});

const initSearchInfo = {
  tag: '',
};

const store = createStore(mainReducer, { searchInfo: initSearchInfo },
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

const addProject = (id, name, imgsrc) => ({
  type: 'ADD_PROJECT',
  id,
  name,
  imgsrc,
  content: '',
  likes: 0,
});

// flickr
const fetchUrl = (url, cb) =>
  fetch(url)
  .then(r => r.json())
  .then(cb);

const generateImgSrc = (farm, server, id, secret) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

const createPhotoCard = p =>
  store.dispatch(addProject(p.id, p.title, generateImgSrc(p.farm, p.server, p.id, p.secret)));

const getDetail = json => {
  // console.log(json);
  store.dispatch({
    type: 'SET_PAGE',
    maxPage: +json.photos.pages,
  });
  return json.photos.photo.map(createPhotoCard);
};

// fetchUrl(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&page=${page}&sort=${sort}&format=json&nojsoncallback=1`, getDetail);

const search = (apiKey, sort, page, text) => (text, page) => fetchUrl(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&page=${page}&sort=${sort}&format=json&nojsoncallback=1`, getDetail);

searchTag = search('', 'relevance');
