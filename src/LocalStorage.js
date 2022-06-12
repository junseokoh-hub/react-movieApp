export const onLogin = (email, password) => {
  localStorage.setItem("username", email);
  localStorage.setItem("password", password);
};

export const onLogout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
};

export const getItemfromLocalStorage = () => {
  return localStorage.getItem("username");
};
