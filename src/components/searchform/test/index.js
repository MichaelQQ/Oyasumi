import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Searchform from '../index';

const testSearchform = t => {
  const onKeyDown = () => {};
  const onChange = () => {};
  const onSearch = () => {};
  const renderer = createRenderer();

  renderer.render(
    <Searchform searchValue={''} onKeyDown={onKeyDown} onChange={onChange} onSearch={onSearch} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <input
        type="text"
        className="input-search"
        placeholder="input the tag name"
        value={''}
        onKeyDown={onKeyDown}
        onChange={onChange}
      ></input>
      <button className="button" onClick={onSearch}>Search</button>
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.equal(
    reactElementToJSXString(actual),
    reactElementToJSXString(expect),
    '<Searchform /> must equal the expect dom'
  );
};

test('Test Searchform Componet', testSearchform);
