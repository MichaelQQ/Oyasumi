import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import createProject from '../js/Project.js';

const Project = createProject(React);

const testProjectComponet = t => {
  const renderer = createRenderer();
  renderer.render(<Project name="test" />);

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <h2>test</h2>
      <div>Content</div>
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.deepEqual(actual, expect, '<Project name="test" /> must equal the expect dom');
};

test('Test Project Componet', testProjectComponet);
