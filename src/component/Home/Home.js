import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_BOOK } from "../../redux/action/actBooks";
import Books from "../Books/Books";
import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
  const dispatch = useDispatch();
  const booksManage = useSelector((state) => state.booksManage);
  useEffect(() => {
    dispatch({
      type: GET_BOOK,
    });
  }, []);
  return (
    <div className="Home">
      <div className="header">
        <h1>
          MyReads <Link to={"/search"}>Search</Link>
        </h1>
      </div>
      <h2>Currently Reading</h2>
      <div className="lsBooks">
        {booksManage.lsBooks
          .filter((n) => n.shelf.includes("currentlyReading"))
          .map((v, i) => {
            return <Books shelf="currentlyReading" data={v} key={i} />;
          })}
      </div>
      <h2>Want to Read</h2>
      <div className="lsBooks">
        {booksManage.lsBooks
          .filter((n) => n.shelf.includes("wantToRead"))
          .map((v, i) => {
            return <Books shelf="wantToRead" data={v} key={i} />;
          })}
      </div>
      <h2>Read</h2>
      <div className="lsBooks">
        {booksManage.lsBooks
          .filter((n) => n.shelf.includes("read"))
          .map((v, i) => {
            return <Books shelf="read" data={v} key={i} />;
          })}
      </div>
    </div>
  );
}
