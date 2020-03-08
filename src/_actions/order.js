import { GET_ORDERS, GET_ORDER } from "../config/constans";
import { API } from "../config/api";

export const getOrders = () => {
  return {
    type: GET_ORDERS,
    payload: async () => {
      const res = await API.get("/orders");
      const { data } = res.data;
      return data;
    }
  };
};

export const getOrderid = id => {
  return {
    type: GET_ORDER,
    payload: async () => {
      const res = await API.get(`/order/${id}`);
      const { data } = res.data;
      return data;
    }
  };
};
