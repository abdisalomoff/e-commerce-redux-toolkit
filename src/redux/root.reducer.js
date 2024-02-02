import { combineReducers } from "redux";
import counterReducer from "./slice/counter.slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./slice/cart.slice";
import getDataReducer from "./slice/fetchData.slice"

const counterPersistConfig = {
  key: "counter",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const dataPersistConfig = {
  key: "data",
  storage,
};

export const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  data: persistReducer(dataPersistConfig, getDataReducer),
});
