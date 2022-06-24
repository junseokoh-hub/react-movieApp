import styled from "styled-components";
import React /*,{ useState, useEffect, useCallback }*/ from "react";
import { fetchMediaVideos } from "../../../api";
import { useQuery } from "react-query";

const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
`;

const SeparateVideos = styled.iframe`
  width: 50%;
  height: 20em;
`;

function Trailers({ movie, id }) {
  const { data: videos } = useQuery(["videos", id], () =>
    fetchMediaVideos(movie, id),
  );
  // const [showData, setShowData] = useState([]);

  // const getMediaVideos = useCallback(async () => {
  //   const json = await fetchMediaVideos(movie, id);
  //   setShowData(json.results);
  // }, [id, movie]);

  // useEffect(() => {
  //   getMediaVideos();
  // }, [getMediaVideos]);

  return (
    <>
      {videos?.results.length === 0 ? (
        <div>Hello</div>
      ) : (
        <>
          <h3 style={{ marginTop: "3em" }}>Trailers</h3>
          <MoreInfo>
            {videos?.results.slice(0, 4).map((item) => {
              return (
                <SeparateVideos
                  key={item.id}
                  title={item.name}
                  src={`https://www.youtube.com/embed/${item.key}`}
                ></SeparateVideos>
              );
            })}
          </MoreInfo>
        </>
      )}
    </>
  );
}

export default Trailers;
