import { configureStore } from "@reduxjs/toolkit";
import employeeActions from "./ReducerEmployee/reducerEmployee";
const store = configureStore({
  reducer: {
    employee: employeeActions.employeeSlice,
  },
});

export default store;
