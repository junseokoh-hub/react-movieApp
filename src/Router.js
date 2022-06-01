import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/TV";
import MyPage from "./Routes/MyPage";
import Detail from "./Routes/Detail";

function Routing() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/tv/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default Routing;
