import React from 'react';
import PropTypes from 'prop-types';


const Searchfrom = ({ ...props }) => {
  const { searchValue, onKeyDown, onChange, onSearch } = props;

  return (
    <div>
      <input
        type="text"
        className="input-search"
        placeholder="input the tag name"
        value={searchValue}
        onKeyDown={onKeyDown}
        onChange={onChange}
      ></input>
      <a href="#" type="button" className="button" onClick={onSearch}>Search</a>
    </div>
  );
};

const {
  string,
  func,
} = PropTypes;

Searchfrom.propTypes = {
  searchValue: string.isRequired,
  onKeyDown: func.isRequired,
  onChange: func.isRequired,
  onSearch: func.isRequired,
};

export default Searchfrom;
