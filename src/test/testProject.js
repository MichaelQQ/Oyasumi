import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import createProject from '../js/Project.js';

const Project = createProject(React);
const testProjectComponet = t => {
  const addLike = () => ('addLikeEvent');
  const renderer = createRenderer();
  renderer.render(
    <Project name="test" imgsrc="null" content="testcontent" likes={0} addLike={addLike} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div className="project">
      <h2>test</h2>
      <img
        src="null"
        alt="project pic"
      />
      <div>testcontent</div>
      <div className="likeBar">
        <span>0 <button onClick={addLike}>+</button></span>
      </div>
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
