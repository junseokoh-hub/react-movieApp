import React, { useEffect, useState } from "react";
import styled from "styled-components";
import genres from "../../genres.json";

const FilterButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1em;
  .isClicked {
    background-color: #3d3d3d;
  }
`;

const FilterButton = styled.button`
  display: ${(props) => props.display};
  border: 1px solid ${(props) => props.theme.whiteColor};
  outline: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.whiteColor};
  padding: ${(props) => props.theme.smallGap};
  margin: 0 0.5em 0.5em 0;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:active {
    background-color: #3d3d3d;
    transform: scale(0.95);
  }
`;

function FilterButtons({
  activeGenre,
  setActiveGenre,
  setFiltered,
  searchData,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(searchData);
      return;
    }
    const filtered =
      searchData &&
      searchData.filter(
        (item) => searchData && item.genre_ids?.includes(activeGenre),
      );
    setFiltered(filtered);
  }, [activeGenre, searchData, setFiltered]);

  const [clicked, setClicked] = useState(0);

  const handleClicked = (index) => {
    setClicked(index);
  };

  return (
    <FilterButtonContainer>
      {genres.map((item, index) => {
        return (
          <FilterButton
            key={item.id}
            onClick={() => {
              handleClicked(index);
              setActiveGenre(item.id);
            }}
            className={clicked === index && "isClicked"}
            display={
              (searchData && searchData.length === 0) ||
              searchData === undefined
                ? "none"
                : "flex"
            }
          >
            {item.name}
          </FilterButton>
        );
      })}
    </FilterButtonContainer>
  );
}

export default FilterButtons;
