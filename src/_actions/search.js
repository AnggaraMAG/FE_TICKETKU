import { SEARCH } from "../config/constans";
import { API } from "../config/api";

export const Search = (stationawal, stationakhir) => {
  return {
    type: SEARCH,
    payload: async () => {
      const res = await API.get(
        `/searching?stationawal=${stationawal}&stationakhir=${stationakhir}`
      );
      const { data } = res.data;
      return data;
    }
  };
};
