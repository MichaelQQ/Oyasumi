import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import createApp from './App.js';

const testData = [
  {
    id: 0,
    name: 'First',
    imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfjSMz2XipFY-Hh9A9d9omkI49ZMYUhyrBZWuBrGXGIm7b8znUWw',
    content: '',
    likes: 0,
  }, {
    id: 1,
    name: 'Second',
    imgsrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFyS_XNNfmivOYbvP8KxZWiwu4ccXZA1jJUyGajQuV8dXswZvV',
    content: '',
    likes: 0,
  }, {
    id: 2,
    name: 'Third',
    imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMThXMPYBdFhtaOe6Z0UefWWpBtRskOu4ojsCoXcvJ3HKnHVGQ',
    content: '',
    likes: 0,
  }, {
    id: 3,
    name: 'Forth',
    imgsrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwlIwuZ1QYVo3_2eFj6IH2FeuYqC91SO-pK43wlwzE0tmgbZn0OA',
    content: '',
    likes: 0,
  }, {
    id: 4,
    name: 'Fifth',
    imgsrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkQFCHD7dZ4XNX3QDPa0ZQQlYrSoFB72IKmBDo_tF_DxlWWTLYXQ',
    content: '',
    likes: 0,
  },
];

let nextProjectId = 5;
const App = createApp(React);

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
    default:
      return state;
  }
};

const projects = (state = testData, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        project(undefined, action),
      ];
    default:
      return state;
  }
};

const store = createStore(projects);

const addProject = () => (
  {
    type: 'ADD_PROJECT',
    id: nextProjectId,
    name: `Proj${nextProjectId++}`,
    imgsrc: 'http://www.planwallpaper.com/static/images/image-slider-2.jpg',
    content: 'test',
    likes: 0,
  }
);

const render = () => {
  ReactDOM.render(
    <div>
      <App
        projects={store.getState()}
        onClick={() => {
          store.dispatch(addProject());
        }
      }
      />
    </div>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
