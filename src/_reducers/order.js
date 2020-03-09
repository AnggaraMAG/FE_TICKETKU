import {
  GET_ORDERS,
  GET_ORDER,
  PUT_STATUS,
  DELETE_ORDER,
  UPLOAD_IMAGE
} from "../config/constans";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDERS}_PENDING`:
    case `${GET_ORDER}_PENDING`:
    case `${PUT_STATUS}_PENDING`:
    case `${DELETE_ORDER}_PENDING`:
    case `${UPLOAD_IMAGE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDERS}_FULFILLED`:
    case `${GET_ORDER}_FULFILLED`:
    case `${PUT_STATUS}_FULFILLED`:
    case `${DELETE_ORDER}_FULFILLED`:
    case `${UPLOAD_IMAGE}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_ORDERS}_REJECTED`:
    case `${GET_ORDER}_REJECTED`:
    case `${PUT_STATUS}_REJECTED`:
    case `${DELETE_ORDER}_REJECTED`:
    case `${UPLOAD_IMAGE}_REJECTED`:
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
