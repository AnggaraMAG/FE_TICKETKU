import { API } from "../config/api";
import { GET_TRAINS, POST_TRAIN } from "../config/constans";

export const getTrains = () => {
  return {
    type: GET_TRAINS,
    payload: async () => {
      const res = await API.get("/tickets");
      const { data } = res.data;
      return data;
    }
  };
};

export const postTrain = data => {
  return {
    type: POST_TRAIN,
    payload: async () => {
      const res = await API.post("/ticket", data);
      const { train } = res.data;
      return train;
    }
  };
};
