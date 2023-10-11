import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_BOOK, GET_SEARCH, SET_BOOK, SET_SEARCH, UPDATE_BOOK } from "../action/actBooks";
import { getAll, search, update } from "../service/service";
function* GetBooks({ type, payload }) {
  let dt = yield call(getAll);

  yield put({
    type: SET_BOOK,
    payload: dt,
  });
}
function* UpdateBooks({ type, payload }) {
  yield call(update, payload.book, payload.shelf);

  yield put({
    type: GET_BOOK,
  });
}
function* GetSearch({ type, payload }) {
  yield delay(1000);

  let dt = yield call(search, payload, 500);
  yield put({
    type: SET_SEARCH,
    payload: dt,
  });
}
function* saBooks() {
  yield takeEvery(GET_BOOK, GetBooks);
  yield takeEvery(UPDATE_BOOK, UpdateBooks);
  yield takeLatest(GET_SEARCH, GetSearch);
}

export default saBooks;
