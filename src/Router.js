import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/TV";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";
import SimilarShows from "./Routes/SimilarMovies";

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
