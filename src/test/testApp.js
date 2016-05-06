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
  const renderer = createRenderer();
  renderer.render(<App />);

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="projectBox">
        <Project name="proj1" />
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
