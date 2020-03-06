import { GET_USER } from "../config/constans";

const iniState = {
  data: [],
  isLogin: false,
  loading: false,
  error: false
};

const user = (state = iniState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLogin: true,
        loading: false
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default user;
