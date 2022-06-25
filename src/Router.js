import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Head from "./Header";
import Home from "./Routes/Home";
import Tv from "./Routes/TV";
import Search from "./Routes/Search";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";
import SimilarShows from "./Routes/SimilarShows";
import Profile from "./Routes/Profile";

function Routing() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/movie/:id" element={<Detail movie />} />
        <Route path="/tv/:id" element={<Detail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/movie/:id/similarShows"
          element={<SimilarShows movie />}
        />
        <Route path="/tv/:id/similarShows" element={<SimilarShows />} />
      </Routes>
    </Router>
  );
}

export default Routing;
