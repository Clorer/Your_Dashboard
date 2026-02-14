import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./Users/users.slice";
import { modalSlice } from "./ModalWindow/Profile/modalWindow.slice";
import { slidebarSlice } from "./Slidebar/slidebar.slice";
import { taskModalSlice } from "./ModalWindow/AddTask/modalWindow.slice";
import { meetingModalSlice } from "./ModalWindow/AddMeeting/modalWindow.slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    modal: modalSlice.reducer,
    taskModal: taskModalSlice.reducer,
    slidebar: slidebarSlice.reducer,
    meetingModal: meetingModalSlice.reducer,
  },
});

export default store