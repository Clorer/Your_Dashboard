import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./Users/users.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer
  },
});
