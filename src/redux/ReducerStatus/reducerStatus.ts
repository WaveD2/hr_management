import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    isModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const statusAction = statusSlice.actions;

const statusActions = {
  statusSlice: statusSlice.reducer,
};

export default statusActions;
