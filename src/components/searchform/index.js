import React from 'react';

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
      <button className="button" onClick={onSearch}>Search</button>
    </div>
  );
};

const {
  string,
  func,
} = React.PropTypes;

Searchfrom.propTypes = {
  searchValue: string.isRequired,
  onKeyDown: func.isRequired,
  onChange: func.isRequired,
  onSearch: func.isRequired,
};

export default Searchfrom;
