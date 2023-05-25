import React from "react";
import {
  useNavigate,
  Route,
  RouteProps,
  Navigate,
  Routes,
} from "react-router-dom";
import { ROUTES } from "../constants/routerConstants";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../constants/validate";
import LayoutHome from "../components/Layout/LayoutHome";
import EmployeePage from "../pages/EmployeePage/EmployeePage";
import EmployeeInfoPage from "../pages/EmployeePage/EmployeeInfoPage";

const ProtectedRoute = () => {
  const auth = Cookies.get(ACCESS_TOKEN_KEY);

  return auth ? (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route path={ROUTES.employee} element={<EmployeePage />} />
        <Route path={ROUTES.employee_info} element={<EmployeeInfoPage />} />
      </Route>
    </Routes>
  ) : (
    <Navigate to="/auth/login" />
  );
};
export default ProtectedRoute;
