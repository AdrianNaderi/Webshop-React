import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../lib/User/UserRequests";

const initialState = {
  userName: "",
  userEmail: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      console.log(action.payload);
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

export const loginThunk = (user) => {
  return async (dispatch) => {
    const userSuccessful = await loginUser(user);
    dispatch(userActions.loginUser({ ...userSuccessful }));
  };
};
