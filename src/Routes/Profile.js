import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIndividualDetail, fetchIndividualFilm } from "../api";
import { IMAGE_BASE_URL } from "../Config";

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
    <div>
      <p>
        {individualDetail.biography && individualDetail.biography.slice(0, 500)}
      </p>
      {individualFilm.cast &&
        individualFilm.cast.slice(0, 3).map((item) => {
          return (
            <img
              key={item.id}
              src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
              alt={item.character}
            />
          );
        })}
    </div>
  );
}

export default Profile;
