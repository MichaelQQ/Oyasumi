import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { App } from '../js/App.js';

const testAppComponet = t => {
  const renderer = createRenderer();
  renderer.render(<App />);

  const actual = renderer.getRenderOutput();
  const expect = (<h1>test</h1>);

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.deepEqual(actual, expect, '<App /> must equal <h1>test</h1>');
};

test('TestAppComponet', testAppComponet);
