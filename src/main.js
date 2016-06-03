import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import thumbnails from './containers/thumbnailContainer/reducer';
import thumbnailId from './containers/thumbnaillist/reducer';
import searchInfo from './containers/searchformContainer/reducer';
import App from './App.js';

import { imgSaga } from './containers/searchformContainer/saga';

const pages = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        maxPage: action.maxPage,
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  thumbnails,
  thumbnailId,
  searchInfo,
  pages,
});

const sagaMiddleware = createSagaMiddleware();
const initSearchInfo = { searchValue: '' };
const store = createStore(
  mainReducer,
  { searchInfo: initSearchInfo },
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
);
sagaMiddleware.run(imgSaga);

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