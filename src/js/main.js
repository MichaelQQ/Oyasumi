import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

import App from './App.js';

const testData = {
  0: {
    id: 0,
    name: 'First',
    imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfjSMz2XipFY-Hh9A9d9omkI49ZMYUhyrBZWuBrGXGIm7b8znUWw',
    content: '',
    likes: 0,
  },
  1: {
    id: 1,
    name: 'Second',
    imgsrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFyS_XNNfmivOYbvP8KxZWiwu4ccXZA1jJUyGajQuV8dXswZvV',
    content: '',
    likes: 0,
  },
  2: {
    id: 2,
    name: 'Third',
    imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMThXMPYBdFhtaOe6Z0UefWWpBtRskOu4ojsCoXcvJ3HKnHVGQ',
    content: '',
    likes: 0,
  },
  3: {
    id: 3,
    name: 'Forth',
    imgsrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwlIwuZ1QYVo3_2eFj6IH2FeuYqC91SO-pK43wlwzE0tmgbZn0OA',
    content: '',
    likes: 0,
  },
  4: {
    id: 4,
    name: 'Fifth',
    imgsrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkQFCHD7dZ4XNX3QDPa0ZQQlYrSoFB72IKmBDo_tF_DxlWWTLYXQ',
    content: '',
    likes: 0,
  },
};

const project = (state = [], action) => {
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

const projects = (state = [], action) => {
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
    default:
      return state;
  }
};

const objects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return [
        ...state, { id: action.id },
      ];
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  projects,
  projectId,
  objects,
});

// const store = createStore(projects);

const store = createStore(mainReducer, { projectId: [0, 1, 2, 3, 4], projects: testData },
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
