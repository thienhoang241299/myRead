import { applyMiddleware, combineReducers, createStore } from "redux";
import rdcBooks from "./reducer/rdcBooks";
import saga from "redux-saga";
import saBooks from "./saga/saBooks";
const mySaga = saga();
const globalState = combineReducers({
  booksManage: rdcBooks,
});
const store = createStore(globalState,applyMiddleware(mySaga));

export default store;
mySaga.run(saBooks)