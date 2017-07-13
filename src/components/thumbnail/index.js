import React from 'react';
import PropTypes from 'prop-types';


const Thumbnail = ({ ...props }) => {
  const { thumbnail } = props;

  return (
    <div className="thumbnail">
      <div className="thumbnail-img">
        <img src={thumbnail.imgsrc} alt={thumbnail.name} />
      </div>
      <div className="thumbnail-cover">
        <div className="thumbnail-bar">{thumbnail.name}</div>
      </div>
    </div>
  );
};

const {
  object,
} = PropTypes;

Thumbnail.propTypes = {
  thumbnail: object.isRequired,
};

export default Thumbnail;
