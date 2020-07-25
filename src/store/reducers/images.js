import { SEARCH_IMAGES_SUCCESS } from "../actions/images";

const initialState = {
  images: [],
  total: 0,
  totalPages: 0
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_IMAGES_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        images: data.results,
        total: data.total,
        totalPages: data.total_pages,
      }
    }

    default: {
      return state;
    }
  }
}
