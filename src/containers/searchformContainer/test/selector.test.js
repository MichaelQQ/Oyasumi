import { test } from 'tape';
import { getSearchValue } from '../selector';

const testThumbnailSelector = t => {
  const state = {
    searchInfo: {
      searchValue: 'test',
    },
  };
  const actul = getSearchValue(state);
  const expect = 'test';

  t.equal(actul, expect, 'getSearchValue must return state.searchInfo.searchValue');
  t.end();
};

test('Test SearchformContainer selector', testThumbnailSelector);
