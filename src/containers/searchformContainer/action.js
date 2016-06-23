
export const IMAGE_FETCH_REQUESTED = 'IMAGE_FETCH_REQUESTED';
export const IMAGE_FETCH_SUCCEEDED = 'IMAGE_FETCH_SUCCEEDED';
export const IMAGE_FETCH_FAILED = 'IMAGE_FETCH_FAILED';

export const KEY_DOWN = 'KEY_DOWN';
export const keydown = (e) => {
  if (e.key === 'Enter') {
    return { type: IMAGE_FETCH_REQUESTED };
  }
  return { type: KEY_DOWN };
};

export const TEXT_CHANGE = 'TEXT_CHANGE';
export const change = (e) => ({
  type: TEXT_CHANGE,
  searchValue: e.target.value,
});

export const search = () => ({ type: IMAGE_FETCH_REQUESTED });
