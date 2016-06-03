import { test } from 'tape';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import reactElementToJSXString from 'react-element-to-jsx-string';

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

  t.plan(1);
  t.equal(
    reactElementToJSXString(actual),
    reactElementToJSXString(expect),
    '<Thumbnail /> must equal the expect dom'
  );
};

test('Test Thumbnail Componet', testThumbnail);
