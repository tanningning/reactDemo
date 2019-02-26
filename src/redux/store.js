import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducer";
import promiseMiddleware from "./middleware/promiseMiddleware";

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

if (module.hot) {
  module.hot.accept("./reducer", () => {
    const nextCombineReducers = require("./reducer").default;
    store.replaceReducer(nextCombineReducers);
  });
}

export default store;
