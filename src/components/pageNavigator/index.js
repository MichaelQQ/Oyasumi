import React from 'react';
import PropTypes from 'prop-types';


const pageNavigator = ({ ...props }) => {
  const { page, maxPage, onPrev, onNext } = props;

  return (
    <div className="nav">
      <a href="#"><div
        className="nav-btn"
        onClick={onPrev}
      > &lt; </div></a>
      {page} / {maxPage}
      <a href="#"><div
        className="nav-btn"
        onClick={onNext}
      > &gt; </div></a>
    </div>
  );
};

const {
  number,
  func,
} = PropTypes;

pageNavigator.propTypes = {
  page: number.isRequired,
  maxPage: number.isRequired,
  onPrev: func.isRequired,
  onNext: func.isRequired,
};

export default pageNavigator;
