import { GET_ORDERS, GET_ORDER } from "../config/constans";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDERS}_PENDING`:
    case `${GET_ORDER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDERS}_FULFILLED`:
    case `${GET_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_ORDERS}_REJECTED`:
    case `${GET_ORDER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
export default reducer;
