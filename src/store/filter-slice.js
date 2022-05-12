import { createSlice } from "@reduxjs/toolkit";

const initialSearchFilter = {
  categories: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialSearchFilter,
  reducers: {
    setCategoryFilter(state, action) {
      state.categories = action.payload.category;
    },
  },
});

export const filterActions = filterSlice.actions;
