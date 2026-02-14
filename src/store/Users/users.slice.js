// users.slice.js
import { createSlice } from "@reduxjs/toolkit";
import { USERS_DATA } from "../../USERS_DATA";
import {
  loadCurrentLoginToStorage,
  loadUsersFromStorage,
  saveCurrentLoginToStorage,
  saveUsersToStorage,
} from "./localstorage";

const initialState = {
  list: loadUsersFromStorage() || USERS_DATA,
  currentUser: loadCurrentLoginToStorage() || null,
  errors: {
    isLoginError: false,
    isEmailError: false,
    isPasswordError: false,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Сбрасываем ошибки
      state.errors.isLoginError = false;
      state.errors.isEmailError = false;
      state.errors.isPasswordError = false;

      const { name, email, password } = action.payload;

      if (state.list.some((u) => u.name === name)) {
        state.errors.isLoginError = true;
        return;
      }
      if (!email.includes("@")) {
        state.errors.isEmailError = true;
        return;
      }
      if (password.length < 8) {
        state.errors.isPasswordError = true;
        return;
      }

      state.list.push(action.payload);
      saveUsersToStorage(state.list);
    },

    clearErrors: (state) => {
      state.errors.isLoginError = false;
      state.errors.isEmailError = false;
      state.errors.isPasswordError = false;
    },

    verificate: (state, action) => {
      const { name, password } = action.payload;
      const user = state.list.find((u) => u.name === name);

      // Пользователь не найден
      if (!user) {
        state.errors.isLoginError = true;
        return;
      }

      // Пароль не совпадает
      if (user.password !== password) {
        state.errors.isPasswordError = true;
        return;
      }

      // Успешный вход
      state.currentUser = user;

      // Синхронизация currentUser с list
      state.list = state.list.map((u) =>
        u.name === user.name ? state.currentUser : u,
      );

      // Сохраняем в localStorage
      saveCurrentLoginToStorage(user);
      saveUsersToStorage(state.list);
    },

    changeUserData: (state, action) => {
      if (!state.currentUser) return;

      state.currentUser = {
        ...state.currentUser,
        fullname: action.payload.fullname,
        email: action.payload.email,
        city: action.payload.city,
      };

      state.list = state.list.map((user) =>
        user.name === state.currentUser.name ? state.currentUser : user,
      );

      saveUsersToStorage(state.list);
      saveCurrentLoginToStorage(state.currentUser);
    },

    changeAvatar: (state, action) => {
      if (!state.currentUser) return;

      state.currentUser = { ...state.currentUser, photo: action.payload };

      state.list = state.list.map((user) =>
        user.name === state.currentUser.name ? state.currentUser : user,
      );

      saveUsersToStorage(state.list);
      saveCurrentLoginToStorage(state.currentUser);
    },

    logout: (state) => {
      state.currentUser = null;
      saveCurrentLoginToStorage(null);
    },

    addTask: (state, action) => {
      if (!state.currentUser) return;

      if (!state.currentUser.tasks) {
        state.currentUser.tasks = [];
      }

      state.currentUser.tasks.push(action.payload);
      saveCurrentLoginToStorage(state.currentUser);
    },

    deleteTask: (state, action) => {
      if (!state.currentUser) return;

      state.currentUser.tasks.splice(action.payload);
      saveCurrentLoginToStorage(state.currentUser);
    },

    addWorkDays: (state, action) => {
      if (!state.currentUser) return;

      if (!state.currentUser.workDays) {
        state.currentUser.workDays = [];
      }

      const exists = state.currentUser.workDays.some(
        (el) => el === action.payload,
      );

      if (!exists) {
        state.currentUser.workDays.push(action.payload);
      } else {
        // Вместо splice используйте filter
        state.currentUser.workDays = state.currentUser.workDays.filter(
          (el) => el !== action.payload,
        );
      }

      saveCurrentLoginToStorage(state.currentUser);
    },
    addMeeting: (state, action) => {
      if (!state.currentUser.meetings) state.currentUser.meetings = []

      state.currentUser.meetings.push(action.payload)
      saveCurrentLoginToStorage(state.currentUser);
    },

    deleteMeeting: (state, action) => {
      if (!state.currentUser) return;

      state.currentUser.meetings.splice(action.payload);
      saveCurrentLoginToStorage(state.currentUser);
    },
  },
});

export const {
  addUser,
  clearErrors,
  verificate,
  logout,
  changeUserData,
  changeAvatar,
  addTask,
  deleteTask,
  addWorkDays,
  addMeeting,
  deleteMeeting,
} = usersSlice.actions;
export default usersSlice.reducer;
