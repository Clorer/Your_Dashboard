import { createSlice } from "@reduxjs/toolkit";

export const meetingModalSlice = createSlice({
  name: "meetingModalWindow",
  initialState: {
    modalState: false,
  },
  reducers: {
    openMeetingModalState: (state) => {
      state.modalState = true;
    },
    closeMeetingModalState: (state) => {
      state.modalState = false;
    },
  },
});

export const { openMeetingModalState, closeMeetingModalState } =
  meetingModalSlice.actions;
export default meetingModalSlice.reducer;
