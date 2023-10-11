import { SET_BOOK, SET_SEARCH } from "../action/actBooks";

const initialState = {
  lsBooks: [],
  lsSearch: [],
};
const rdcBooks = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOK:
      return {
        ...state,
        lsBooks: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        lsSearch: payload.error != undefined ? [] : payload,
      };
    default:
      return state;
  }
};

export default rdcBooks;
