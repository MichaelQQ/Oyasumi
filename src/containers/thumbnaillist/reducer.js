import { IMAGE_FETCH_SUCCEEDED } from '../searchformContainer/action';

const thumbnailId = (state = [], action) => {
  switch (action.type) {
    case 'ADD_THUMBNAIL':
      return [
        ...state,
        action.id,
      ];
    case IMAGE_FETCH_SUCCEEDED:
      return [
        ...action.imgsIdArray,
      ];
    default:
      return state;
  }
};

export default thumbnailId;
