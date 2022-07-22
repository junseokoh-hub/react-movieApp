import { API_KEY, API_URL } from "./Config";
import { setCookie } from "./Cookie";

export const getReqToken = async () => {
  const response = await fetch(
    `https://${API_URL}authentication/token/new?api_key=${API_KEY}`,
  );
  const json = await response.json();
  return json.request_token;
};

export const createSessoinWithLogin = async (data, reqToken) => {
  const response = await fetch(
    `https://${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        username: data?.username,
        password: data?.password,
        request_token: reqToken,
      }),
    },
  );
  const json = await response.json();
  return json.request_token;
};

export const createSession = async (newReqToken) => {
  const response = await fetch(
    `https://${API_URL}authentication/session/new?api_key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        request_token: newReqToken,
      }),
    },
  );
  const json = await response.json();
  setCookie("tmdbsession", json.session_id);
  return json.session_id;
};
