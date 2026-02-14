import { createSlice } from "@reduxjs/toolkit";

export const taskModalSlice = createSlice({
  name: "taskModalWindow",
  initialState: {
    modalState: false,
    taskType: null,
  },
  reducers: {
    openTaskModalState: (state, action) => {
      state.modalState = true;
      state.taskType = action.payload;
    },
    closeTaskModalState: (state) => {
      state.modalState = false;
      state.taskType = null;
    },
  },
});

export const { openTaskModalState, closeTaskModalState } =
  taskModalSlice.actions;
export default taskModalSlice.reducer;
