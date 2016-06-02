import React from 'react';

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
} = React.PropTypes;

Thumbnail.propTypes = {
  thumbnail: object.isRequired,
};

export default Thumbnail;
