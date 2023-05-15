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
      console.log("state.employeeListValueTable", state.employeeListValueTable);
    },
    detailValueTable: (state, action) => {
      console.log("action reducer employeeDetail ", action.payload);

      state.employeeDetail = action.payload;
      console.log("state.employeeDetail", state.employeeDetail);
    },
  },
});

export const employeeAction = employeeSlice.actions;

const employeeActions = {
  employeeSlice: employeeSlice.reducer,
};

export default employeeActions;
