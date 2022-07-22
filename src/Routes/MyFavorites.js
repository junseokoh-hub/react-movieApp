import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { API_KEY, API_URL } from "../Config";
import { getCookie } from "../Cookie";
import { accountSelector } from "../Recoil/AccountAtom";

function MyFavorites() {
  const accountId = useRecoilValue(accountSelector);
  const { data, isLoading } = useQuery(["movie", "favorites"], async () => {
    const response = await fetch(
      `https://${API_URL}account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${getCookie(
        "tmdbsession",
      )}`,
    );
    const json = await response.json();
    return json;
  });
  return (
    <div>
      {data?.results?.map((item) => (
        <p key={item.id}>{item.original_title}</p>
      ))}
    </div>
  );
}

export default MyFavorites;
