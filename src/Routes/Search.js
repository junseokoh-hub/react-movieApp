import React, { useState } from "react";
import { fetchSearchMedia } from "../api";
import SearchBox from "../components/Search/SearchBox";
import SearchedContent from "../components/Search/SearchedContent";

function Search() {
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(0);
  const [searchData, setSearchData] = useState([]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      try {
        const json = await fetchSearchMedia(value);
        setSearchData(json.results);
      } catch (error) {
        console.log("error", error);
      }
    }, 400);
    setTimer(newTimer);
  };

  return (
    <>
      <SearchBox search={search} onChange={onChange} />
      <SearchedContent searchData={searchData} />
    </>
  );
}

export default Search;
