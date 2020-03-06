import { LOGIN, REGISTER } from "../config/constans";
const iniState = {
  authenticated: false,
  loading: false,
  islogin: false,
  verif: true
};

const auth = (state = iniState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        islogin: true,
        loading: false
      };
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        loading: false,
        verif: false
      };
    default:
      return state;
  }
};

export default auth;
