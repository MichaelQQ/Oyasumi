import { IMAGE_FETCH_SUCCEEDED } from '../searchformContainer/action';

const thumbnail = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_THUMBNAIL':
    return {
      id: action.id,
      name: action.name,
      imgsrc: action.imgsrc,
    };
  default:
    return state;
  }
};

const thumbnails = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_THUMBNAIL':
    return {
      ...state,
      [action.id]: thumbnail(undefined, action),
    };
  case IMAGE_FETCH_SUCCEEDED:
    return {
      ...action.imgsObject,
    };
  default:
    return state;
  }
};

export default thumbnails;
