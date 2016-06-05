import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { SearchformContainer } from '../index';
import Searchform from '../../../components/searchform';
import { keydown, change, search } from '../action';

const testSearchformContainer = t => {
  const searchValue = '';
  const renderer = createRenderer();

  renderer.render(
    <SearchformContainer
      searchValue={searchValue} onKeyDown={keydown} onChange={change} onSearch={search}
    />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <Searchform
        searchValue={searchValue}
        onKeyDown={keydown}
        onChange={change}
        onSearch={search}
      />
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, '<SearchformContainer /> must equal the expect dom');
  t.end();
};

test('Test SearchformContainer', testSearchformContainer);
