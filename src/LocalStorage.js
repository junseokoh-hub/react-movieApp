export const onLogin = (username, password) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
};

export const onLogout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
};

export const getItemfromLocalStorage = () => {
  return localStorage.getItem("username");
};
