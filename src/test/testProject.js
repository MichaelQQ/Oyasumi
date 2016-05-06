import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import createProject from '../js/Project.js';

const Project = createProject(React);

const testProjectComponet = t => {
  const renderer = createRenderer();
  renderer.render(<Project
    name="test" imgsrc="http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701"
  />);

  const actual = renderer.getRenderOutput();
  const expect = (
    <div className="project">
      <h2>test</h2>
      <img
        src="http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701"
        alt="project pic"
      />
      <div>Content</div>
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.deepEqual(
    reactElementToJSXString(actual),
    reactElementToJSXString(expect),
    '<Project name="test" /> must equal the expect dom'
  );
};

test('Test Project Componet', testProjectComponet);
