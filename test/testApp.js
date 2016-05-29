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

  renderer.render(
    <App projectId={[0]} onAddProject={onAddProject} onAddObject={onAddObject} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <div className="nav">
        <button onClick={onAddProject}>Search</button>
        <button onClick={onAddObject}>Add Objects</button>
      </div>
      <Obj />
      <div className="projectBox">
        <Project projectId={0} />
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
