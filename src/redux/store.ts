import { configureStore } from "@reduxjs/toolkit";
import employeeActions from "./ReducerEmployee/reducerEmployee";
import statusActions from "./ReducerStatus/reducerStatus";

const store = configureStore({
  reducer: {
    employee: employeeActions.employeeSlice,
    status: statusActions.statusSlice,
  },
});

export default store;
