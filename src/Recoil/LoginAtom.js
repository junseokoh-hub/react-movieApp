import { atom } from "recoil";
import { getCookie } from "../Cookie";

export const LoginAtom = atom({
  key: "login",
  default: getCookie("tmdbsession") !== undefined,
});
