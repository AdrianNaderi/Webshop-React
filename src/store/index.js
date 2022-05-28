import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";
import productSlice, { productsFetch } from "./product-slice";
import { productsApi } from "../Components/Features/productsApi";
import cartReducer from "./cart-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    products: productSlice.reducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice.reducer,
  },
});

export default store;
