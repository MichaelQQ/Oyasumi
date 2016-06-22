import React from 'react';
import { connect } from 'react-redux';

export const LoadingContainer = ({ ...props }) => {
  const { isFetching = false } = props;

  const loading = isFetching ?
    <img src="images/loading.gif" alt="loading" /> : undefined;

  return (
    <div className="loading">{loading}</div>
  );
};

const { bool } = React.PropTypes;

LoadingContainer.propTypes = {
  isFetching: bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.searchInfo.isFetching,
});

export default connect(mapStateToProps)(LoadingContainer);
