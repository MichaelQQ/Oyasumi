import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Thumbnail from '../index';

const testThumbnail = t => {
  const thumbnail = {
    name: 'thumbnail-test-name',
    imgsrc: 'thumbnail-test-name',
  };
  const renderer = createRenderer();

  renderer.render(
    <Thumbnail thumbnail={thumbnail} />
  );

  const actual = renderer.getRenderOutput();
  const expect = (
    <div className="thumbnail">
      <div className="thumbnail-img">
        <img src={thumbnail.imgsrc} alt={thumbnail.name} />
      </div>
      <div className="thumbnail-cover">
        <div className="thumbnail-bar">{thumbnail.name}</div>
      </div>
    </div>
  );

  deepFreeze(expect);
  deepFreeze(actual);

  t.deepEqual(actual, expect, '<Thumbnail /> must equal the expect dom');
  t.end();
};

test('Test Thumbnail Componet', testThumbnail);
