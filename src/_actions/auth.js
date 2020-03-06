import { LOGIN, REGISTER } from "../config/constans";
import { API } from "../config/api";

export const login = data => {
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data.data;
    }
  };
};

export const register = data => {
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);
      localStorage.setItem("token", res.data.token);
      return res.data.data;
    }
  };
};
