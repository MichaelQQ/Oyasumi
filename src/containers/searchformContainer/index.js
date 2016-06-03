import React from 'react';
import { connect } from 'react-redux';

import Searchform from '../../components/searchform';
import { keydown, change, search } from './action';

export const SearchformContainer = ({ ...props }) => {
  const { searchValue, onKeyDown, onChange, onSearch } = props;

  return (
    <div>
      <Searchform
        searchValue={searchValue}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onSearch={onSearch}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchValue: state.searchInfo.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: (e) => dispatch(keydown(e)),
  onChange: (e) => dispatch(change(e)),
  onSearch: (e) => dispatch(search(e)),
});

const {
  string,
  func,
} = React.PropTypes;

SearchformContainer.propTypes = {
  searchValue: string.isRequired,
  onKeyDown: func.isRequired,
  onChange: func.isRequired,
  onSearch: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchformContainer);
