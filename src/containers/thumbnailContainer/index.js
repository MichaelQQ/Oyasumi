import React from 'react';
import { connect } from 'react-redux';

import Thumbnail from '../../components/thumbnail';

const makeMapStateToProps = (initialState, initialOwnProps) => (state) => ({
  thumbnail: state.thumbnails[initialOwnProps.thumbnailId],
});

export const ThumbnailContainer = ({ ...props }) => {
  const { thumbnail } = props;

  return (
    <div>
      <Thumbnail thumbnail={thumbnail} />
    </div>
  );
};

const {
  object,
} = React.PropTypes;

ThumbnailContainer.propTypes = {
  thumbnail: object.isRequired,
};

export default connect(makeMapStateToProps)(ThumbnailContainer);
