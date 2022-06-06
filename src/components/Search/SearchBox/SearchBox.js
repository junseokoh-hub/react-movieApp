import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 80%;
  display: block;
  margin: calc(${(props) => props.theme.smallGap}*3) auto;
  padding: ${(props) => props.theme.smallGap};
  color: ${(props) => props.theme.whiteColor};
  &::placeholder {
    color: ${(props) => props.theme.whiteColor};
  }
`;

function SearchBox({ search, onChange }) {
  return (
    <SearchInput
      value={search}
      type="text"
      placeholder="Search..."
      onChange={onChange}
    />
  );
}

export default SearchBox;
