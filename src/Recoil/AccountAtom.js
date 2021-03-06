import { atom, selector } from "recoil";
import { API_KEY, API_URL } from "../Config";
import { getCookie } from "../Cookie";

export const accountAtom = atom({
  key: "account",
  default: getCookie("tmdbsession"),
});

export const accountSelector = selector({
  key: "accountSelector",
  get: async ({ get }) => {
    const tmdbsession = get(accountAtom);
    const response = await fetch(
      `https://${API_URL}account?api_key=${API_KEY}&&session_id=${tmdbsession}`,
    );
    const json = await response.json();
    return json.id;
  },
});

export const favMovieSelector = selector({
  key: "favMovieSelectorFamily",
  get: async ({ get }) => {
    const accountId = get(accountSelector);
    const response = await fetch(
      `https://${API_URL}account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${getCookie(
        "tmdbsession",
      )}`,
    );
    const json = await response.json();
    return json;
  },
});
