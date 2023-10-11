import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Search from "./component/Search/Search";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
