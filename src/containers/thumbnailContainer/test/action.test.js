import { test } from 'tape';
import deepFreeze from 'deep-freeze';

import { addThumbnail } from '../action';

const testThumbnailContainerAction = t => {
  const actual = addThumbnail('test_id', 'test_name', 'test_imgsrc');
  const expect = {
    type: 'ADD_THUMBNAIL',
    id: 'test_id',
    name: 'test_name',
    imgsrc: 'test_imgsrc',
  };

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, 'action must return a action object');
  t.end();
};

test('Test Thumbnail Container action', testThumbnailContainerAction);
