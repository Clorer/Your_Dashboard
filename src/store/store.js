import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./Users/users.slice";
import { modalSlice } from "./Modal Window/modalWindow.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    modal: modalSlice.reducer
  },
});
