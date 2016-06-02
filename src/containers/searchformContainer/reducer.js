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
        isFetching: true,
      };
    case IMAGE_FETCH_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
      };
    case IMAGE_FETCH_FAILED:
    default:
      return state;
  }
};

export default searchInfo;
