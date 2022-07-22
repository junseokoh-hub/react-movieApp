import { atom, selector } from "recoil";
import { API_KEY, API_URL } from "../Config";
import { getCookie } from "../Cookie";

export const ListAtom = atom({
  key: "list",
  default: getCookie("tmdbsession"),
});

export const ListSelector = selector({
  key: "listSelector",
  get: async ({ get }) => {
    const tmdbsession = get(ListAtom);
    const response = await fetch(
      `https://${API_URL}account?api_key=${API_KEY}&&session_id=${tmdbsession}`,
    );
    const json = await response.json();
    return json.id;
  },
});
