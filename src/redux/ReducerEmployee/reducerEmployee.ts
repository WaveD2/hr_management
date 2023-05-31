import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeListValueTable: [],
  employeeDetail: [],
  employeeSalary_Wages: [],
  employeeContractImage: [],
  employeeOtherImage: [],
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
    addEmployeeContractImage: (state, action) => {
      state.employeeContractImage.push(action.payload);
    },
    deleteEmployeeContractImage: (state, action) => {
      state.employeeContractImage = state.employeeContractImage.filter(
        (item: any) => item?.id !== action.payload
      );
    },
    addEmployeeOtherImage: (state, action) => {
      state.employeeOtherImage.push(action.payload);
    },
    deleteEmployeeOtherImage: (state, action) => {
      state.employeeOtherImage = state.employeeOtherImage.filter(
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
