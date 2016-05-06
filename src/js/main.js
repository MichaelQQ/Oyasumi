import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import createApp from './App.js';

const App = createApp(React);

const project = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        id: action.id,
        name: action.name,
        imgsrc: action.imgsrc,
      };
    default:
      return state;
  }
};

const projects = (state = [], action) => {
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

let nextProjectId = 0;
const addProject = () => (
  {
    type: 'ADD_PROJECT',
    id: nextProjectId,
    name: `Proj${nextProjectId++}`,
    imgsrc: 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
  }
);

const render = () => {
  ReactDOM.render(
    <div>
      <button
        onClick={() => {
          store.dispatch(addProject());
        }}
      >Click</button>
      <App
        projects={store.getState()}
      />
    </div>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
