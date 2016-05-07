import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import createApp from '../js/App';
import createProject from '../js/Project';

const App = createApp(React);
const Project = createProject(React);

const testAppComponet = t => {
  const onClick = () => ('coClick');
  const addLike = () => ('addLike');
  const renderer = createRenderer();
  const project = [{
    addLike,
    name: 'proj1',
    imgsrc: 'null',
    content: 'null',
    likes: 0,
  }];

  renderer.render(
    <App projects={project} onAddProject={onClick} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="nav">
        <button onClick={onClick}>Add Project</button>
      </div>
      <div className="projectBox">
        <Project project={project[0]} />
      </div>
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.equal(
    reactElementToJSXString(actual),
    reactElementToJSXString(expect),
    '<App /> must equal the expect dom'
  );
};

test('Test App Componet', testAppComponet);
