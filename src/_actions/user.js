import { API, setAuthToken } from "../config/api";
import { GET_USER } from "../config/constans";

export const getUser = () => {
  const token = localStorage.getItem("token");
  return {
    type: GET_USER,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/user");
      const {data} = res.data;
      return data;
    }
  };
};
