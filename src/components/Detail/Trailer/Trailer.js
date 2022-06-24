import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import { fetchMediaVideos } from "../../../api";

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
  const [showData, setShowData] = useState([]);

  const getMediaVideos = useCallback(async () => {
    const json = await fetchMediaVideos(movie, id);
    setShowData(json.results);
  }, [id, movie]);

  useEffect(() => {
    getMediaVideos();
  }, [getMediaVideos]);

  return (
    <>
      {showData.length === 0 ? (
        <div>Hello</div>
      ) : (
        <>
          <h3 style={{ marginTop: "3em" }}>Trailers</h3>
          <MoreInfo>
            {showData.slice(0, 4).map((item) => {
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
