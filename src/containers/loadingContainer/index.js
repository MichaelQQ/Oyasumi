import React from 'react';
import { connect } from 'react-redux';

export const LoadingContainer = ({ ...props }) => {
  const { isFetching = false } = props;

  const loading = isFetching
    ? (<div className="loading"><img src="images/loading.gif" alt="loading" /></div>)
    : undefined;

  return loading;
};

const { bool } = React.PropTypes;

LoadingContainer.propTypes = {
  isFetching: bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.searchInfo.isFetching,
});

export default connect(mapStateToProps)(LoadingContainer);
