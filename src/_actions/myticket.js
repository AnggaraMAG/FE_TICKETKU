import { GET_MYTICKET } from "../config/constans";
import { API } from "../config/api";

export const getMyticket = () => {
  return {
    type: GET_MYTICKET,
    payload: async () => {
      const res = await API.get("/myticket");
      const { data } = res.data;
      return data;
    }
  };
};
