import { test } from 'tape';
import deepFreeze from 'deep-freeze';

import reducer from '../reducer';
import {
  TEXT_CHANGE,
  IMAGE_FETCH_REQUESTED,
  IMAGE_FETCH_SUCCEEDED,
} from '../action';

const testTextchange = (t) => {
  const state = {};
  const actual = reducer(state, { type: TEXT_CHANGE, searchValue: 'a' });
  const expect = {
    searchValue: 'a',
  };

  deepFreeze(actual);
  deepFreeze(expect);

  t.deepEqual(actual, expect, 'TEXT_CHANGE action');
};

const testImgFetchRequested = (t) => {
  const state = { searchValue: 'a' };
  const actual = reducer(state, { type: IMAGE_FETCH_REQUESTED });
  const expect = {
    searchValue: 'a',
    lastSearchValue: 'a',
    isFetching: true,
  };

  deepFreeze(actual);
  deepFreeze(expect);

  t.deepEqual(actual, expect, 'IMAGE_FETCH_REQUESTED action');
};

const testImgFetchSucceeded = (t) => {
  const state = {};
  const actual = reducer(state, { type: IMAGE_FETCH_SUCCEEDED, page: 1, maxPage: 10 });
  const expect = {
    isFetching: false,
    lastPage: 1,
    maxPage: 10,
  };

  deepFreeze(actual);
  deepFreeze(expect);

  t.deepEqual(actual, expect, 'IMAGE_FETCH_SUCCEEDED action');
};

const testThumbnailReducer = t => {
  testTextchange(t);
  testImgFetchRequested(t);
  testImgFetchSucceeded(t);
  t.end();
};

test('Test SearchformContainer reducer', testThumbnailReducer);
