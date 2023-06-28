import { configureStore } from "@reduxjs/toolkit";
import cartReducre from "./slices/cartSlice";
import productReducer from "./slices/productsSlice";
const store = configureStore({
  reducer: {
    cart: cartReducre,
    product: productReducer,
  },
});

export default store;
