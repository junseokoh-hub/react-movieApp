import { atom } from "recoil";
import { getItemfromLocalStorage } from "../LocalStorage";

export const LoginAtom = atom({
  key: "login",
  default: getItemfromLocalStorage() !== null,
});
