// store.js

import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import referralReducer from "./slices/referralCodeSlice";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    referralCode: referralReducer,
  },
});

export default store;
