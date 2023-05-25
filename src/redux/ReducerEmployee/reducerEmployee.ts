import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeListValueTable: [],
  employeeDetail: [],
  employeeSalary_Wages: [],
  employeeImage: [],
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
    addEmployeeSalary_Wages: (state, action) => {
      state.employeeSalary_Wages = action.payload;
    },
    addEmployeeImage: (state, action) => {
      state.employeeImage.push(action.payload);
    },
    deleteEmployeeImage: (state, action) => {
      state.employeeImage = state.employeeImage.filter(
        (item: any) => item?.id !== action.payload
      );
    },
  },
});

export const employeeAction = employeeSlice.actions;

const employeeActions = {
  employeeSlice: employeeSlice.reducer,
};

export default employeeActions;
