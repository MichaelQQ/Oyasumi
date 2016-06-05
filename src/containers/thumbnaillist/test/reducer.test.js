import { test } from 'tape';

import thumbnailListReducer from '../reducer';
import { IMAGE_FETCH_SUCCEEDED } from '../../searchformContainer/action';

const testAddThumbnail = (t) => {
  const state = [];
  const actual = thumbnailListReducer(state, { type: 'ADD_THUMBNAIL', id: 1 });
  const expect = [1];

  t.deepEqual(actual, expect, 'ADD_THUMBNAIL action');
};

const testImgFetchSucceeded = (t) => {
  const state = [];
  const imgsIdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const actual = thumbnailListReducer(state, { type: IMAGE_FETCH_SUCCEEDED, imgsIdArray });
  const expect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  t.deepEqual(actual, expect, 'IMAGE_FETCH_SUCCEEDED action');
};

const testThumbnailListReducer = t => {
  testAddThumbnail(t);
  testImgFetchSucceeded(t);
  t.end();
};

test('Test ThumbnailList reducer', testThumbnailListReducer);
