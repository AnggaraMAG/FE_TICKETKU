import { GET_TYPES } from "../config/constans";
import { API } from "../config/api";

export const getTypes = () => {
  return {
    type: GET_TYPES,
    payload: async () => {
      const res = await API.get("/type");
      const { data } = res.data;
      return data;
    }
  };
};
