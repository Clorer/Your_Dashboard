import { createSlice } from "@reduxjs/toolkit";

export const slidebarSlice = createSlice({
  name: "slidebarSlice",
  initialState: { activeTab: "Dashboard" },
  reducers: {
    switchActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { switchActiveTab } = slidebarSlice.actions;
export default slidebarSlice.reducer;
