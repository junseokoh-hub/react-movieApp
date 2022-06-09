import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/TV";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";
import SimilarShows from "./Routes/SimilarShows";
import Profile from "./Routes/Profile";
import { useState } from "react";

function Routing() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setEmail(value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", email);
    setLogin(true);
  };

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    setLogin(false);
    setEmail("");
  };

  const savedUsername = localStorage.getItem("username");

  return (
    <Router>
      <Head login={login} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv" element={<Tv />} />
        <Route
          path="/myPage"
          element={
            <MyPage
              login={login}
              onChange={onChange}
              onLogin={onLogin}
              onLogout={onLogout}
              email={email}
              savedUsername={savedUsername}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<Detail movie login={login} savedUsername={savedUsername} />}
        />
        <Route
          path="/tv/:id"
          element={<Detail login={login} savedUsername={savedUsername} />}
        />
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
