import {
  GET_ORDERS,
  PUT_STATUS,
  DELETE_ORDER,
  UPLOAD_IMAGE,
  USER_TICKET
} from "../config/constans";
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

export const putStatus = (id, data) => {
  return {
    type: PUT_STATUS,
    payload: async () => {
      const res = await API.put(`/order/${id}`, {
        data
      });
      const { x } = res.data;
      return x;
    }
  };
};

export const deleteOrder = id => {
  return {
    type: DELETE_ORDER,
    payload: async () => {
      const res = await API.delete(`/order/${id}`);
      const { x } = res.data;
      return x;
    }
  };
};

export const uploadimage = (formData, id) => {
  return {
    type: UPLOAD_IMAGE,
    payload: async () => {
      const res = await API.post(`/upload/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(id, "kooonnnnnnnci")
      const { x } = res.data;
      return x;
    }
  };
};

export const useraddticket = data => {
  // console.log(data, "hhhhhhhhhhhhhhhhhhhhhhs");

  return {
    type: USER_TICKET,
    payload: async () => {
      const res = await API.post("/order", data);
      const { x } = res.data;
      return x;
    }
  };
};
