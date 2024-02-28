import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cursorVarients: "default",
};

const mainslice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCursorVarients: (state, action) => {
      state.cursorVarients = action.payload;
    },
  },
});

export const { setCursorVarients } = mainslice.actions;
export default mainslice.reducer;
