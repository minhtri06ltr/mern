//global variables
export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://sleepy-inlet-56101.herokuapp.com/api";
//name column in local storage
export const LOCAL_STORAGE_TOKEN_NAME =
  "learn-mern";
