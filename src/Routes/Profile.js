import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIndividualDetail, fetchIndividualFilm } from "../api";
import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";

const ProfileTitle = styled.h3`
  color: ${(props) => props.theme.darkBlueColor};
`;

function Profile() {
  const [individualFilm, setIndividualFilm] = useState({});
  const [individualDetail, setIndividualDetail] = useState({});

  const { id } = useParams();

  const getIndividualFilm = useCallback(async () => {
    const json = await fetchIndividualFilm(id);
    setIndividualFilm(json);
  }, [id]);

  const getIndividual = useCallback(async () => {
    const json = await fetchIndividualDetail(id);
    setIndividualDetail(json);
  }, [id]);

  useEffect(() => {
    getIndividualFilm();
    getIndividual();
  }, [getIndividualFilm, getIndividual]);

  return (
    <ul>
      <li>
        {individualDetail && (
          <img
            src={`https://${IMAGE_BASE_URL}/w200${individualDetail.profile_path}`}
            alt={individualDetail.name}
            style={{ display: "blcok", paddingTop: "1em" }}
          />
        )}
      </li>
      <li>
        <ProfileTitle>Biography</ProfileTitle>
        <p>
          {individualDetail.biography &&
            individualDetail.biography.slice(0, 500)}
          ...
        </p>
      </li>
      <li
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "3em",
          padding: "1em 0",
        }}
      >
        <ProfileTitle>Filmography</ProfileTitle>
        <div style={{ display: "flex", overflowX: "auto" }}>
          {individualFilm.cast &&
            individualFilm.cast.map((item) => {
              return (
                <img
                  key={item.id}
                  src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                  alt={item.character}
                  style={{ display: "inline-block" }}
                />
              );
            })}
        </div>
      </li>
    </ul>
  );
}

export default Profile;
