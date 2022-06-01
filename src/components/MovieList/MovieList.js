import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration-line: none;
  }
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6em;
  margin: 1em 0.5em;
`;

const Poster = styled.img`
  width: 5em;
  margin-bottom: 0.4em;
`;

const ListHeader = styled.span`
  font-size: 0.8em;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.whiteColor};
`;

function MovieList({ tvShow, movie, apiList }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function apiCall() {
      try {
        const response = await fetch(
          `https://${API_URL}${
            movie ? "movie" : "tv"
          }/${apiList}?api_key=${API_KEY}&language=en-US`,
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (err) {
        console.log(err);
      }
    }
    apiCall();
  }, [movie, apiList]);

  return (
    <>
      <h2 style={{ padding: "0.5em", textTransform: "uppercase" }}>
        {apiList}
      </h2>
      <UnorderedList>
        {data.results &&
          data.results.map((item) => {
            return (
              <Link to="/movie/:id">
                <List key={item.id}>
                  <Poster
                    src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                    alt={item.original_title}
                  />
                  {tvShow ? (
                    <ListHeader>{item.original_name}</ListHeader>
                  ) : (
                    <ListHeader>
                      {item.title.length > 10
                        ? `${item.title.slice(0, 10)}...`
                        : item.title}
                    </ListHeader>
                  )}
                </List>
              </Link>
            );
          })}
      </UnorderedList>
      <br />
    </>
  );
}

export default MovieList;
