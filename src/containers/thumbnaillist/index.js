import React from 'react';
import { connect } from 'react-redux';

import ThumbnailContainer from '../thumbnailContainer';

const mapStateToProps = (state) => ({
  thumbnailId: state.thumbnailId,
});

export const ThumbnailList = ({ ...props }) => {
  const { thumbnailId = [] } = props;

  return (
    <div className="thumbnailList">
      {thumbnailId.map(id => <ThumbnailContainer thumbnailId={id} key={id} />)}
    </div>
  );
};

const {
  array,
} = React.PropTypes;

ThumbnailList.propTypes = {
  thumbnailId: array,
};

export default connect(mapStateToProps)(ThumbnailList);
