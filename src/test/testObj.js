import test from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Obj } from '../js/Obj.js';

const testObjectComponet = t => {
  const objects = [{
    id: 0,
  }];

  const renderer = createRenderer();
  renderer.render(
    <Obj objects={objects} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <span key={0} > 0 </span>
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

test('Test Object Componet', testObjectComponet);
