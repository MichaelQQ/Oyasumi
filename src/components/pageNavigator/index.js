import React from 'react';

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
} = React.PropTypes;

pageNavigator.propTypes = {
  page: number.isRequired,
  maxPage: number.isRequired,
  onPrev: func.isRequired,
  onNext: func.isRequired,
};

export default pageNavigator;
