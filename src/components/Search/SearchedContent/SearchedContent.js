import React from "react";
import styled from "styled-components";
import FilterButtons from "../../FilterButtons/FilterButtons";
import SearchedSection from "../SearchedSection";

const SearchContainer = styled.div`
  padding-bottom: 0.4em;
`;

function SearchedContent({
  keyword,
  filtered,
  activeGenre,
  setActiveGenre,
  setFiltered,
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
      {searchData.length > 0 ? (
        <>
          <SearchedSection filtered={filtered} movie />
          <SearchedSection filtered={filtered} />
        </>
      ) : (
        keyword && <span>{keyword}로 검색한 결과가 없습니다.</span>
      )}
    </SearchContainer>
  );
}

export default SearchedContent;
