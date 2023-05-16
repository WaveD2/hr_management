import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeListValueTable: [],
  employeeDetail: [],
};
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addListValuesTable: (state, action) => {
      state.employeeListValueTable = action.payload;
    },
    detailValueTable: (state, action) => {
      state.employeeDetail = action.payload;
    },
  },
});

export const employeeAction = employeeSlice.actions;

const employeeActions = {
  employeeSlice: employeeSlice.reducer,
};

export default employeeActions;
