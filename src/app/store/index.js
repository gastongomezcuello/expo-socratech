import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import shopReducer from "../../features/shop/shopSlice";
import cartReducer from "../../features/cart/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../../services/shopService";
import { ordersApi } from "../../services/ordersService";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, ordersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
