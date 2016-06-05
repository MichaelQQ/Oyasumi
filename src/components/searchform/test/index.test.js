import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

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

  t.deepEqual(actual, expect, '<Searchform /> must equal the expect dom');
  t.end();
};

test('Test Searchform Componet', testSearchform);
