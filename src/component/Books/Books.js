import React from "react";
import "./Books.scss";
import { useDispatch } from "react-redux";
import { UPDATE_BOOK } from "../../redux/action/actBooks";
export default function Books(props) {
  const dispatch = useDispatch();
  const HandelClick = (e) => {
    dispatch({
      type: UPDATE_BOOK,
      payload: {
        book: props.data,
        shelf: e.target.value,
      },
    });
  };
  return (
    <div className="Books">
      <div className="books-top">
        <img src={props.data.imageLinks.smallThumbnail} alt="" />
        <div className="book-shelf-changer">
          <select defaultValue={props.shelf} onChange={HandelClick}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <h5>{props.data.title}</h5>
      <p>{props.data.authors.join(", ")}</p>
    </div>
  );
}
