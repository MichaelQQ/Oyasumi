import app from 'js/app';
import * as test from 'tape';

const testSum = t => {
  const sumBefore = 0;
  const arr = [1, 2, 3, 4, 5];
  const sumAfter = 15;

  // deepFreeze(stateBefore);
  // deepFreeze(stateAfter);

  t.plan(1);
  t.deepEqual(sumAfter, app.sum(sumBefore, arr));
};

test('Sum must equal 15', testSum);
