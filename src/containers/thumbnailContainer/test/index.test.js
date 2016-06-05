import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Thumbnail from '../../../components/thumbnail';
import { ThumbnailContainer } from '../index';

const testThumbnailContainer = t => {
  const thumbnail = {};
  const renderer = createRenderer();

  renderer.render(
    <ThumbnailContainer thumbnail={thumbnail} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div>
      <Thumbnail thumbnail={thumbnail} />
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, '<ThumbnailContainer /> must equal the expect dom');
  t.end();
};

test('Test Thumbnail Container', testThumbnailContainer);
