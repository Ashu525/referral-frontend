import { createSlice } from "@reduxjs/toolkit";

const referralFromLocalStorage = localStorage.getItem("referralCode");

const referralSlice = createSlice({
  name: "referralCode",
  initialState: referralFromLocalStorage ? referralFromLocalStorage : null,
  reducers: {
    setReferral(state, action) {
      localStorage.setItem("referralCode", action.payload);
      return action.payload;
    },
    clearReferral(state) {
      localStorage.removeItem("referralCode");
      return null;
    },
  },
});

export const { setReferral, clearReferral } = referralSlice.actions;
export const selectReferral = (state) => state.referralCode;
export default referralSlice.reducer;
