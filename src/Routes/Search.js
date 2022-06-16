import React, { useState } from "react";
import { fetchSearchMedia } from "../api";
import SearchBox from "../components/Search/SearchBox";
import SearchedContent from "../components/Search/SearchedContent";

function Search() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [timer, setTimer] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
    if (timer) {
      clearTimeout(timer);
    }
    if (value) {
      const newTimer = setTimeout(async () => {
        try {
          const json = await fetchSearchMedia(value);
          setSearchData(json.results);
          setFiltered(json.results);
          setKeyword(value);
        } catch (error) {
          console.log("error", error);
        }
      }, 400);
      setTimer(newTimer);
    } else {
      setSearchData([]);
      setFiltered([]);
      setKeyword("");
    }
  };
  return (
    <>
      <SearchBox search={search} onChange={onChange} />
      <SearchedContent
        keyword={keyword}
        filtered={filtered}
        searchData={searchData}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
    </>
  );
}

export default Search;
