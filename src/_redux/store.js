import { createStore, combineReducers, applyMiddleware } from "redux";

import { logger, promise } from "../middleware";

const rootReducers = combineReducers({
  //
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
