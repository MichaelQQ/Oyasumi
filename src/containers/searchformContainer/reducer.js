import {
  TEXT_CHANGE,
  IMAGE_FETCH_REQUESTED,
  IMAGE_FETCH_SUCCEEDED,
  IMAGE_FETCH_FAILED } from './action';

const searchInfo = (state = {
  isFetching: false,
}, action) => {
  switch (action.type) {
  case TEXT_CHANGE:
    return {
      ...state,
      searchValue: action.searchValue,
    };
  case IMAGE_FETCH_REQUESTED:
    return {
      ...state,
      lastSearchValue: state.searchValue,
      isFetching: true,
    };
  case IMAGE_FETCH_SUCCEEDED:
    return {
      ...state,
      lastPage: action.page,
      maxPage: action.maxPage,
      isFetching: false,
    };
  case IMAGE_FETCH_FAILED:
    return {
      ...state,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default searchInfo;
