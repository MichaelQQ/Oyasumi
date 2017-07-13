import { test } from 'tape';
import deepFreeze from 'deep-freeze';

import {
  IMAGE_FETCH_REQUESTED,
  KEY_DOWN,
  TEXT_CHANGE,
  keydown,
  change,
} from '../action';

const testKeydown = (t) => {
  const actual = keydown({ key: 'Enter' });
  const expect = {
    type: IMAGE_FETCH_REQUESTED,
  };

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, 'key Enter action must return a IMAGE_FETCH_REQUESTED action');

  const actual1 = keydown({ key: '1' });
  const expect1 = {
    type: KEY_DOWN,
  };

  deepFreeze(expect1);
  deepFreeze(actual1);

  t.deepEqual(actual1, expect1, 'other keys action must return a KEY_DOWN action');
};

const testTextchange = (t) => {
  const actual = change(
    { target: {
      value: 'a',
    },
    }
  );
  const expect = {
    type: TEXT_CHANGE,
    searchValue: 'a',
  };

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, 'change action must return a TEXT_CHANGE and value');
};

const testSearchformContainer = t => {
  testKeydown(t);
  testTextchange(t);
  t.end();
};

test('Test searhform Container action', testSearchformContainer);
