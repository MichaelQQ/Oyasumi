import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { App } from '../src/js/App';
import Project from '../src/js/Project';
import Obj from '../src/js/Obj';

const testAppComponet = t => {
  const onAddProject = () => {};

  const onAddObject = () => {};

  const renderer = createRenderer();
  const project = [{
    name: 'proj1',
    imgsrc: 'null',
    content: 'null',
    likes: 0,
  }];

  renderer.render(
    <App projects={project} onAddProject={onAddProject} onAddObject={onAddObject} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="nav">
        <button onClick={onAddProject}>Add Project</button>
        <button onClick={onAddObject}>Add Objects</button>
      </div>
      <Obj />
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
