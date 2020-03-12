import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../_reducers/auth";
import trains from "../_reducers/trains";
import user from "../_reducers/user";
import types from "../_reducers/types";
import orders from "../_reducers/order";
import myticket from "../_reducers/myticket";
import search from "../_reducers/search";

import { logger, promise } from "../middleware";

const rootReducers = combineReducers({
  auth,
  trains,
  user,
  types,
  orders,
  myticket,
  search
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
