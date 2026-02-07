import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalWindow",
  initialState: false,
  reducers: {
    changeModalState: (state) => {
      return !state;
    },
    closeModal: () => false, 
  },
});

export const { changeModalState, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
