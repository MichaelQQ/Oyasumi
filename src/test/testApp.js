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
  const project = [{
    name: 'proj1',
    imgsrc: 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
  }];

  renderer.render(
    <App projects={project} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="projectBox">
        <Project
          imgsrc="http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701"
          name="proj1"
        />
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
