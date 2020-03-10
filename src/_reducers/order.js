import {
  GET_ORDERS,
  GET_ORDER,
  PUT_STATUS,
  DELETE_ORDER,
  UPLOAD_IMAGE,
  USER_TICKET
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
    case `${USER_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDERS}_FULFILLED`:
    case `${GET_ORDER}_FULFILLED`:
    case `${PUT_STATUS}_FULFILLED`:
    case `${DELETE_ORDER}_FULFILLED`:
    case `${UPLOAD_IMAGE}_FULFILLED`:
    case `${USER_TICKET}_FULFILLED`:
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
    case `${USER_TICKET}_REJECTED`:
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
