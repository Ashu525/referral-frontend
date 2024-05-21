import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage = localStorage.getItem("token");

const tokenSlice = createSlice({
  name: "token",
  initialState: tokenFromStorage ? tokenFromStorage : null,
  reducers: {
    setToken(state, action) {
      localStorage.setItem("token", action.payload);
      return action.payload;
    },
    clearToken(state) {
      localStorage.removeItem("token");
      return null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const selectToken = (state) => state.token;
export default tokenSlice.reducer;
