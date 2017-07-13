import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const LoadingContainer = ({ ...props }) => {
  const { isFetching } = props;

  const loading = isFetching
    ? (<div className="loading"><img src="images/loading.gif" alt="loading" /></div>)
    : (<div></div>);

  return loading;
};

const { bool } = PropTypes;

LoadingContainer.propTypes = {
  isFetching: bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.searchInfo.isFetching || false,
});

export default connect(mapStateToProps)(LoadingContainer);
