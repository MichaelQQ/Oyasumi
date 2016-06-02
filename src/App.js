import React from 'react';
import { connect } from 'react-redux';

import ThumbnailList from './containers/thumbnaillist';
import SearchformContainer from './containers/searchformContainer';

export const App = ({ ...props }) => {
  // const { tag, page, maxPage, onSearch } = props;

  return (
    <div>
      <h1 className="title-bar">
        <span className="title">Oyasumi</span>
        <SearchformContainer />
      </h1>
      {/*<div>
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
      </div>*/}
      <ThumbnailList />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   tag: state.searchInfo.tag,
//   page: state.searchInfo.page,
//   maxPage: state.searchInfo.maxPage,
// });

// const {
//   func,
//   string,
//   number,
// } = React.PropTypes;
//
// App.propTypes = {
//   tag: string.isRequired,
//   page: number,
//   maxPage: number,
//   onSearch: func.isRequired,
// };

// export default connect(mapStateToProps)(App);
export default App;
