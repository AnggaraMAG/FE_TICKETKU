import { GET_TRAINS, POST_TRAIN } from "../config/constans";

const iniState = {
  data: [],
  loading: false,
  error: false
};

const trains = (state = iniState, action) => {
  switch (action.type) {
    case `${GET_TRAINS}_PENDING`:
    case `${POST_TRAIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRAINS}_FULFILLED`:
    case `${POST_TRAIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TRAINS}_REJECTED`:
    case `${POST_TRAIN}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default trains;
