import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import shopReducer from "../../features/shop/shopSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
  },
});

export default store;
