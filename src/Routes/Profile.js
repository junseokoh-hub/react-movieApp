import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchIndividualDetail, fetchIndividualFilm } from "../api";
import styled from "styled-components";
import CommonImg from "../components/CommonImg/CommonImg";

const ProfileTitle = styled.h3`
  color: ${(props) => props.theme.darkBlueColor};
`;

const ProfileLi = styled.li`
  padding-left: ${(props) => props.theme.smallGap};
  margin-top: 2em;
  &:nth-child(3) {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
  }
`;

const ProfileFilmography = styled.div`
  display: flex;
  overflow-x: auto;
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
      <ProfileLi>
        {/* <ProfileImg
          src={`https://${IMAGE_BASE_URL}/w200/${individualDetail.profile_path}`}
          alt={individualDetail.name}
        /> */}
        <CommonImg
          path={individualDetail.profile_path}
          size={200}
          alt={individualDetail.name}
        />
        <span>
          {individualDetail.also_known_as && individualDetail.also_known_as[0]}
        </span>
      </ProfileLi>
      <ProfileLi>
        <ProfileTitle>Biography</ProfileTitle>
        <p style={{ fontStyle: "oblique" }}>
          {individualDetail.biography &&
            individualDetail.biography.slice(0, 500)}
          ...
        </p>
      </ProfileLi>
      <ProfileLi>
        <ProfileTitle>Filmography</ProfileTitle>
        <ProfileFilmography>
          {individualFilm.cast &&
            individualFilm.cast
              .filter((item) => item.popularity > 100)
              .map((item) => {
                return (
                  <Link
                    to={`/${item.media_type === "movie" ? "movie" : "tv"}/${
                      item.id
                    }`}
                    key={item.credit_id}
                  >
                    <CommonImg
                      size={200}
                      path={item.poster_path}
                      alt={item.character}
                    />
                    <p>
                      {item.media_type === "movie"
                        ? item.original_title
                        : item.original_name}
                    </p>
                    <span style={{ fontStyle: "oblique" }}>
                      {item.media_type === "movie"
                        ? item.release_date.slice(0, 4)
                        : item.first_air_date.slice(0, 4)}
                    </span>
                  </Link>
                );
              })}
        </ProfileFilmography>
      </ProfileLi>
    </ul>
  );
}

export default Profile;
