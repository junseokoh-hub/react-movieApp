import React from "react";
import styled from "styled-components";
import SearchedSection from "../SearchedSection";

const SearchContainer = styled.div`
  padding-bottom: 0.4em;
`;

function SearchedContent({ searchData }) {
  return (
    <SearchContainer>
      <SearchedSection searchData={searchData} movie />
      <SearchedSection searchData={searchData} />
    </SearchContainer>
  );
}

export default SearchedContent;
