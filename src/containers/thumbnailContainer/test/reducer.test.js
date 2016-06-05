import { test } from 'tape';
import deepFreeze from 'deep-freeze';

import reducer from '../reducer';
import { addThumbnail } from '../action';
import { IMAGE_FETCH_SUCCEEDED } from '../../searchformContainer/action';

const testAddThumbnail = (t) => {
  const state = {};
  const actual = reducer(state, addThumbnail('test_id', 'test_name', 'test_imgsrc'));
  const expect = {
    test_id: {
      id: 'test_id',
      name: 'test_name',
      imgsrc: 'test_imgsrc',
    },
  };

  deepFreeze(actual);
  deepFreeze(expect);

  t.deepEqual(actual, expect, 'ADD_THUMBNAIL action');
};

const testImgFetchSucceeded = (t) => {
  const state = {};
  const imgsObject = {
    1: {
      id: 1,
      name: 'name1',
      imgsrc: 'imgsrc1',
    },
    2: {
      id: 2,
      name: 'name2',
      imgsrc: 'imgsrc2',
    },
    3: {
      id: 3,
      name: 'name3',
      imgsrc: 'imgsrc3',
    },
  };

  const actual = reducer(state, { type: IMAGE_FETCH_SUCCEEDED, imgsObject });
  const expect = {
    1: {
      id: 1,
      name: 'name1',
      imgsrc: 'imgsrc1',
    },
    2: {
      id: 2,
      name: 'name2',
      imgsrc: 'imgsrc2',
    },
    3: {
      id: 3,
      name: 'name3',
      imgsrc: 'imgsrc3',
    },
  };

  deepFreeze(actual);
  deepFreeze(expect);

  t.deepEqual(actual, expect, 'IMAGE_FETCH_SUCCEEDED action');
};

const testThumbnailListReducer = t => {
  testAddThumbnail(t);
  testImgFetchSucceeded(t);
  t.end();
};

test('Test ThumbnailList reducer', testThumbnailListReducer);
