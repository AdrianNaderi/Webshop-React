import { createSlice } from "@reduxjs/toolkit";

const initialSearchFilter = {
  categories: "",
  colors: "",
  sizes: "",
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
      state.categories = "";
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
