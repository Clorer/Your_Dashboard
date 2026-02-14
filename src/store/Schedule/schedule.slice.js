import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workDays: [],
};

export const scheduleSlice = createSlice({
  initialState,
  reducers: {
    addWorksDay: (state, action) => {
        state.workDays.push(action.payload)
    }
  }
});
