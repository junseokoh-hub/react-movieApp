import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/TV";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";
import SimilarShows from "./Routes/SimilarShows";
import Profile from "./Routes/Profile";
import { LoginContext } from "./Context/LoginContext";
import { useState } from "react";
import { getItemfromLocalStorage } from "./LocalStorage";

function Routing() {
  const [login, setLogin] = useState(getItemfromLocalStorage() !== null);
  return (
    <Router>
      <LoginContext.Provider value={{ login, setLogin }}>
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
      </LoginContext.Provider>
    </Router>
  );
}

export default Routing;
