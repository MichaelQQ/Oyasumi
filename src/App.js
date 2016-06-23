import React from 'react';
import ThumbnailList from './containers/thumbnaillist';
import SearchformContainer from './containers/searchformContainer';
import LoadingContainer from './containers/loadingContainer';
import PageNavigatorContainer from './containers/pageNavigatorContainer';

export const App = () =>
  <div>
    <h1 className="title-bar">
      <span className="title">Oyasumi</span>
      <SearchformContainer />
      <PageNavigatorContainer />
    </h1>
    <LoadingContainer />
    <ThumbnailList />
  </div>;

export default App;
