import { createSlice } from "@reduxjs/toolkit";
import { USERS_DATA } from "../../USERS_DATA";

const initialState = {
  list: USERS_DATA,
  isLoginError: false,
  isEmailError: false,
  isPasswordError: false,
  isLogin: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.isLoginError = false;
      state.isEmailError = false;
      state.isPasswordError = false;

      if (state.list.some((us) => us.login === action.payload.login)) {
        state.isLoginError = true;
        return;
      } else if (!action.payload.email.includes("@")) {
        state.isEmailError = true;
        return;
      } else if (action.payload.password.length < 8) {
        state.isPasswordError = true;
        return;
      }
      state.list.push(action.payload);
    },
    clearErrors: (state) => {
      state.isLoginError = false;
      state.isEmailError = false;
      state.isPasswordError = false;
    },
    verificate: (state, action) => {
      state.list.map((user) => {
        if (user.name === action.payload.name) {
          if (!(user.password === action.payload.password)) return;
          state.isLogin = true;
          console.log("succesful")
        }
      });
    },
  },
});

export const { addUser, clearErrors, verificate } = usersSlice.actions;
export default usersSlice.reducer;
