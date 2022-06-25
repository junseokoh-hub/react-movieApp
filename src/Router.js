import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Head from "./Header";
import Home from "./Routes/Home";
import Tv from "./Routes/TV";
import Search from "./Routes/Search";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";
import SimilarShows from "./Routes/SimilarShows";
import Profile from "./Routes/Profile";
import MyProfile from "./components/MyPage/MyProfile";
import CreateAccount from "./Routes/CreateAccount";
import { LoginContext } from "./Context/LoginContext";
import MyRating from "./components/MyPage/MyRating";
import MyList from "./components/MyPage/MyList";

function Routing() {
  const { login } = useContext(LoginContext);
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movie/:id" element={<Detail movie />} />
        <Route path="/tv/:id" element={<Detail />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/movie/:id/similarShows"
          element={<SimilarShows movie />}
        />
        <Route path="/tv/:id/similarShows" element={<SimilarShows />} />
        {login ? (
          <>
            <Route path="/myPage/myProfile" element={<MyProfile />} />
            <Route path="/myPage/myRating" element={<MyRating />} />
            <Route path="/myPage/myList" element={<MyList />} />
          </>
        ) : (
          <>
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/createAccount" element={<CreateAccount />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default Routing;
