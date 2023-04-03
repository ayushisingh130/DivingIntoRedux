import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  showProfile: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      state.showProfile = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.showProfile = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
