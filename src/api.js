import { API_KEY, API_URL } from "./Config";

/* Home */

export const fetchTrending = async () => {
  const response = await fetch(
    `https://${API_URL}trending/all/week?api_key=${API_KEY}&language=en-US`,
  );
  const json = response.json();
  return json;
};

/* Detail */

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

/* Search */

export const fetchSearchMedia = async (value) => {
  const response = await fetch(
    `https://${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`,
  );
  const json = await response.json();
  return json;
};

/* Profile */

export const fetchIndividualFilm = async (id) => {
  const response = await fetch(
    `https://${API_URL}person/${id}/combined_credits?api_key=${API_KEY}&language=en-US`,
  );
  const json = await response.json();
  return json;
};

export const fetchIndividualDetail = async (id) => {
  const response = await fetch(
    `https://${API_URL}person/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const json = response.json();
  return json;
};
