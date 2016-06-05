import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import ThumbnailContainer from '../../thumbnailContainer';
import { ThumbnailList } from '../index';

const testThumbnailList = t => {
  const thumbnailId = [1, 2, 3];
  const renderer = createRenderer();

  renderer.render(
    <ThumbnailList thumbnailId={thumbnailId} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div className="thumbnailList">
      {thumbnailId.map(id => <ThumbnailContainer thumbnailId={id} key={id} />)}
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.plan(1);
  t.deepEqual(actual, expect, '<ThumbnailList /> must equal the expect dom');
};

test('Test ThumbnailList Container', testThumbnailList);
