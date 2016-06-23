import React from 'react';
import { connect } from 'react-redux';

import PageNavigator from '../../components/pageNavigator';
import { prev, next } from './action';

export const PageNavigatorContainer = ({ ...props }) => {
  const { page, maxPage, onPrev, onNext } = props;

  return page
  ? (
    <PageNavigator
      page={page}
      maxPage={maxPage}
      onPrev={onPrev}
      onNext={onNext}
    />)
  : (<div></div>);
};

const mapStateToProps = (state) => ({
  page: state.searchInfo.lastPage,
  maxPage: state.searchInfo.maxPage,
});

const mapDispatchToProps = (dispatch) => ({
  onPrev: (e) => dispatch(prev(e)),
  onNext: (e) => dispatch(next(e)),
});

const {
  func,
  number,
} = React.PropTypes;

PageNavigatorContainer.propTypes = {
  page: number,
  maxPage: number,
  onPrev: func.isRequired,
  onNext: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigatorContainer);
