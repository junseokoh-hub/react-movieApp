import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchIndividualDetail, fetchIndividualFilm } from "../api";
import styled from "styled-components";
import CommonImg from "../components/CommonImg";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

const ProfileTitle = styled.h3`
  color: ${(props) => props.theme.darkBlueColor};
  @media screen and (max-width: 500px) {
    margin-bottom: 0.5em;
  }
`;

const ProfileLi = styled.li`
  padding-left: ${(props) => props.theme.smallGap};
  margin-top: 2em;
  &:nth-child(3) {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
  }
  @media screen and (max-width: 500px) {
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ProfileFilmography = styled.div`
  display: flex;
  overflow-x: auto;
`;

function Profile() {
  const { id } = useParams();
  const { data: individualDetail } = useQuery(["profileIndividual", id], () =>
    fetchIndividualDetail(id),
  );
  const { data: individualFilm } = useQuery(["profileFilm", id], () =>
    fetchIndividualFilm(id),
  );

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  return (
    <>
      <Helmet>
        <title>{individualDetail?.name}</title>
      </Helmet>
      <ul style={{ paddingTop: `3.2em` }}>
        <ProfileLi>
          <CommonImg
            path={individualDetail?.profile_path}
            size={200}
            alt={individualDetail?.name}
          />
          <span>{individualDetail?.name}</span>
        </ProfileLi>
        <ProfileLi>
          <ProfileTitle>Biography</ProfileTitle>
          <p style={{ fontStyle: "oblique" }}>
            {individualDetail?.biography?.slice(0, 500)}
            ...
          </p>
        </ProfileLi>
        <ProfileLi>
          <ProfileTitle>Filmography</ProfileTitle>
          <ProfileFilmography>
            {individualFilm?.cast &&
              individualFilm?.cast
                .filter((item) => item.popularity > 100)
                .map((item) => {
                  const mediaType = item.media_type === "movie";
                  return (
                    <Link
                      to={`/${mediaType ? "movie" : "tv"}/${item.id}`}
                      key={item.credit_id}
                    >
                      <CommonImg
                        size={200}
                        path={item.poster_path}
                        alt={item.character}
                      />
                      <p>
                        {mediaType ? item.original_title : item.original_name}
                      </p>
                      <span style={{ fontStyle: "oblique", fontSize: "0.5em" }}>
                        {mediaType
                          ? item.release_date.slice(0, 4)
                          : item.first_air_date.slice(0, 4)}
                      </span>
                    </Link>
                  );
                })}
          </ProfileFilmography>
        </ProfileLi>
      </ul>
    </>
  );
}

export default Profile;
