import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_BOOK, GET_SEARCH } from "../../redux/action/actBooks";
import Books from "../Books/Books";
import "./Search.scss";
import { Link } from "react-router-dom";
export default function Search() {
  const dispatch = useDispatch();
  const booksManage = useSelector((state) => state.booksManage);
  const [booksSearch, SetBooksSearch] = useState([]);

  const HandelSearch = (e) => {
    dispatch({
      type: GET_SEARCH,
      payload: e.target.value,
    });
  };
  useEffect(() => {
    if (booksManage.lsBooks.length < 1) {
      dispatch({
        type: GET_BOOK,
      });
    }
  }, []);
  useEffect(() => {
    booksManage.lsSearch.map((v) => {
      let checkHave = booksManage.lsBooks.find((n) => {
        return n.id == v.id;
      });
      if (checkHave != undefined) {
        return SetBooksSearch((pre) => [...pre, checkHave]);
      } else {
        return SetBooksSearch((pre) => [...pre, v]);
      }
    });
  }, [booksManage]);
  return (
    <div className="Search">
      <Link to={"/"}>Back to Home </Link>
      <br />
      <label>Enter Name of book</label>
      <input type="text" onKeyUp={HandelSearch} placeholder="Enter name of book ..." />
      <div className="books">
        {booksSearch.map((v, i) => {
          return <Books shelf={v.shelf} data={v} key={i} />;
        })}
      </div>
    </div>
  );
}
