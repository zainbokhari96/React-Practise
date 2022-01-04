import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "redux",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composedEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
