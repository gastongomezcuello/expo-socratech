import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";

import cartReducer from "../../features/cart/cartSlice";
import authReducer from "../../features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../../services/shopService";
import { ordersApi } from "../../services/ordersService";
import { authApi } from "../../services/authService";
import { profileApi } from "../../services/profileService";

const store = configureStore({
  reducer: {
    counter: counterReducer,

    [shopApi.reducerPath]: shopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,

    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      ordersApi.middleware,
      authApi.middleware,
      profileApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
