import { API_KEY, API_URL } from "./Config";

export const fetchMedia = async (movie, id) => {
  const response = await fetch(
    `https://${API_URL}${
      movie ? "movie" : "tv"
    }/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};

export const fetchMediaVideos = async (movie, id) => {
  const response = await fetch(
    `https://${API_URL}${
      movie ? "movie" : "tv"
    }/${id}/videos?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};

export const fetchMediaReviews = async (movie, id) => {
  const response = await fetch(
    `https://${API_URL}${
      movie ? "movie" : "tv"
    }/${id}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};

export const fetchMediaSimilarShows = async (movie, id) => {
  const response = await fetch(
    `https://${API_URL}${
      movie ? "movie" : "tv"
    }/${id}/similar?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};

export const fetchMediaCredits = async (movie, id) => {
  const response = await fetch(
    `https://${API_URL}${
      movie ? "movie" : "tv"
    }/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};
