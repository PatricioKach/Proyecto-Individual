import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../Reducer/reducer";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;
