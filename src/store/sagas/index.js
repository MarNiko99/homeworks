import { all, fork } from 'redux-saga/effects';
import images from "./images";

export default function* watchers() {
  yield all([
    images
  ].map(fork))
}
