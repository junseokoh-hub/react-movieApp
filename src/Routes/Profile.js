import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIndividual } from "../api";
import { IMAGE_BASE_URL } from "../Config";

function Profile() {
  const [individual, setIndividual] = useState({});

  const { id } = useParams();

  const getIndividual = useCallback(async () => {
    const json = await fetchIndividual(id);
    setIndividual(json);
  }, [id]);

  useEffect(() => {
    getIndividual();
  }, [getIndividual]);

  return (
    <div>
      {individual.cast &&
        individual.cast.slice(0, 3).map((item) => {
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
