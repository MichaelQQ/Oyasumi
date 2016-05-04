import test from 'tape';
import * as app from '../js/app.js';

const testSum = t => {
  const sumBefore = 0;
  const arr = [1, 2, 3, 4, 5];
  const sumAfter = 15;

  // deepFreeze(stateBefore);
  // deepFreeze(stateAfter);
  // t.deepEqual(sumAfter, app.sum(sumBefore, arr));

  t.plan(1);
  t.equal(app.sum(sumBefore, arr), sumAfter);
};

test('Sum of [1, 2, 3, 4, 5] must equal 15', testSum);
