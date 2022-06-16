import React from "react";
import styled from "styled-components";
import FilterButtons from "../../FilterButtons/FilterButtons";
import SearchedSection from "../SearchedSection";

const SearchContainer = styled.div`
  padding-bottom: 0.4em;
`;

function SearchedContent({
  filtered,
  activeGenre,
  setActiveGenre,
  setFiltered,
  search,
  searchData,
}) {
  return (
    <SearchContainer>
      <FilterButtons
        searchData={searchData}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <SearchedSection
        filtered={filtered}
        search={search}
        searchData={searchData}
        movie
      />
      <SearchedSection
        filtered={filtered}
        search={search}
        searchData={searchData}
      />
    </SearchContainer>
  );
}

export default SearchedContent;
