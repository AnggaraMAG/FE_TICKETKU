import { SEARCH } from "../config/constans";

const initialState = {
  data: [],
  order: false,
  error: null,
  isloading: false
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case `${SEARCH}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${SEARCH}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${SEARCH}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default search;
