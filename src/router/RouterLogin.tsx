import { Routes, Route } from "react-router-dom";
import React from "react";
import { ROUTES } from "../constants/routerConstants";
import EmployeePage from "../pages/EmployeePage/EmployeePage";
import EmployeeInfoPage from "../pages/EmployeePage/EmployeeInfoPage";

const RouterLogin = () => {
  console.log("1231");

  return (
    <Routes>
      <Route path={ROUTES.employee} element={<EmployeePage />} />
      <Route path={ROUTES.employee_info} element={<EmployeeInfoPage />} />
    </Routes>
  );
};

export default RouterLogin;
