import { createSlice } from "@reduxjs/toolkit";

const initialSearchFilter = {
  categories: "",
  colors: "",
  sizes: "",
  onSale: "",
  inStock: "",
  brand: "",
  orderBy: "Ascending",
  display: "list",
  displayCount: 9,
  page: 1,
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
      state.onSale = "";
    },
    setInStockFilter(state) {
      state.inStock = "In Stock";
    },
    resetInStockFilter(state) {
      state.inStock = "";
    },
    setBrandFilter(state, action) {
      state.brand = action.payload.brand;
    },
    resetBrandFilter(state) {
      state.brand = "";
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload.orderBy;
    },
    setDisplayCount(state, action) {
      state.displayCount = action.payload.displayCount;
    },
    setDisplay(state, action) {
      state.display = action.payload.display;
    },
    setPage(state, action) {
      state.page = action.payload.page;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
