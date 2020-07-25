import { takeLatest, call, put } from "redux-saga/effects";
import { SEARCH_IMAGES_FAIL, SEARCH_IMAGES_REQUEST, SEARCH_IMAGES_SUCCESS } from "../actions/images";
import Api from "../../Api";

export default function* watcher() {
  yield takeLatest(SEARCH_IMAGES_REQUEST, searchImages)
}

function* searchImages(action) {
  try {
    const { s } = action.payload;
    const { data } = yield call(Api.searchPhotos, s)
    yield put({
      type: SEARCH_IMAGES_SUCCESS,
        payload: { data }
    })
  } catch (e) {
    yield put({
      type: SEARCH_IMAGES_FAIL,
      message: e.message
    })
  }
}
