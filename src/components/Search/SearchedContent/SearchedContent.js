import React from "react";
import { IMAGE_BASE_URL } from "../../../Config";
import styled from "styled-components";

const SearchedImg = styled.img`
  width: 10em;
  height: 15em;
  display: block;
`;

function SearchedContent({ searchData }) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {searchData.results &&
        searchData.results.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                width: "10em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SearchedImg
                src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                alt={item.title}
              />
              <span style={{ textAlign: "center" }}>{item.original_title}</span>
            </li>
          );
        })}
    </ul>
  );
}

export default SearchedContent;
