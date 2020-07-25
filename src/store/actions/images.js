export const SEARCH_IMAGES_REQUEST = 'SEARCH_IMAGES_REQUEST';
export const SEARCH_IMAGES_SUCCESS = 'SEARCH_IMAGES_SUCCESS';
export const SEARCH_IMAGES_FAIL = 'SEARCH_IMAGES_FAIL';

export function searchImagesRequest(s) {
  return {
    type: SEARCH_IMAGES_REQUEST,
    payload: { s }
  }
}
