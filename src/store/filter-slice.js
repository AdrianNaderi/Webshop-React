import { createSlice } from "@reduxjs/toolkit";

const initialSearchFilter = {
  categories: "",
  colors: "",
  sizes: "",
  onSale: "",
  inStock: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialSearchFilter,
  reducers: {
    setCategoryFilter(state, action) {
      state.categories = action.payload.category;
    },
    resetCategoryFilter(state) {
      state.categories = "";
    },
    setColorFilter(state, action) {
      state.colors = action.payload.color;
    },
    resetColorFilter(state) {
      state.categories = "";
    },
    setSizeFilter(state, action) {
      state.sizes = action.payload.size;
    },
    resetSizeFilter(state) {
      state.sizes = "";
    },
    setOnSaleFilter(state) {
      state.onSale = "On Sale";
    },
    resetOnSaleFilter(state) {
      state.sizes = "";
    },
    setInStockFilter(state) {
      state.inStock = "In Stock";
    },
    resetInStockFilter(state) {
      state.inStock = "";
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
