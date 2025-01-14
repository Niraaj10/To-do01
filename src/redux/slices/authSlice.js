import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, user: null },
  reducers: {
    // Dummy login method for user login purposes only
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
