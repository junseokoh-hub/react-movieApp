import React, { useState } from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 80%;
  display: block;
  margin: 1.5em auto;
  padding: 0.5em;
  color: ${(props) => props.theme.whiteColor};
  &::placeholder {
    color: ${(props) => props.theme.whiteColor};
  }
`;

function Search() {
  const [search, setSearch] = useState("");

  return (
    <SearchBox
      value={search}
      type="text"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder="Search..."
    />
  );
}

export default Search;
