import React from 'react';
import { connect } from 'react-redux';

// import ObjList from './ObjList.js';
import Project from './Project';

// let nextObjId = 0;

const search = (tag, page) => ({
  type: 'SEARCH',
  tag,
  page,
});

// const addObject = () => ({
//   type: 'ADD_OBJECT',
//   id: nextObjId++,
// });

const mapStateToProps = (state) => ({
  projectId: state.projectId,
  tag: state.searchInfo.tag,
  page: state.searchInfo.page,
  maxPage: state.searchInfo.maxPage,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (tag, page) => {
    dispatch(search(tag, page));
  },
  // onAddObject: () => {
  //   dispatch(addObject());
  // },
  onChange: (tag) => {
    dispatch({
      type: 'TEXT_CHANGE',
      tag,
    });
  },
});

const {
  array,
  func,
  string,
  number,
} = React.PropTypes;

export const App = ({ ...props }) => {
  const { projectId = [], tag, page, maxPage, onSearch, onChange } = props;

  return (
    <div>
      <h1 className="title-bar">
        <span className="title">Oyasumi</span>
        <input
          type="text"
          className="input-search"
          placeholder="input the tag name"
          value={tag}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              return onSearch(tag, 1);
            }
            return undefined;
          }}
          onChange={e => onChange(e.target.value)}
        ></input>
        <button className="button" onClick={() => onSearch(tag, 1)}>Search</button>
      </h1>
      <div>
        <a href="#"><div
          className="page-nav"
          onClick={() => {
            if (page > 1) {
              onSearch(tag, page - 1);
            }
          }}
        > &lt; </div></a>
        {page} / {maxPage}
        <a href="#"><div
          className="page-nav"
          onClick={() => {
            if (page < maxPage) {
              onSearch(tag, page + 1);
            }
          }}
        > &gt; </div></a>
      </div>
      <div className="projectBox">
        {projectId.map(id => <Project projectId={id} key={id} />)}
      </div>
    </div>
  );
};

App.propTypes = {
  tag: string.isRequired,
  page: number,
  maxPage: number,
  projectId: array.isRequired,
  onSearch: func.isRequired,
  // onAddObject: func.isRequired,
  onChange: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
