import axios from "axios";

export const API = axios.create({
  baseURL: "localhost/"
});

export const setAuthToken = token => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
