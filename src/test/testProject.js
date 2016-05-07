import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import createProject from '../js/Project.js';

const Project = createProject(React);
const testProjectComponet = t => {
  const onAddLike = () => ('addLikeEvent');

  const project = {
    name: 'test',
    imgsrc: 'null',
    content: 'testContent',
    likes: 0,
  };

  const renderer = createRenderer();
  renderer.render(
    <Project project={project} onAddLike={onAddLike} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div className="project">
      <h2>test</h2>
      <img
        src="null"
        alt="project pic"
      />
      <div>testContent</div>
      <div className="likeBar">
        <span>0 <button onClick={onAddLike}>+</button></span>
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
