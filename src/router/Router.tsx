import React, { Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routerConstants";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../constants/validate";

import ProtectedRoute from "../context/ProtectedRoute";
import ProtectedRouteLogin from "../context/ProtectedRouteLogin";
import RouterLogin from "./RouterLogin";
const LayoutHome = React.lazy(() => import("../components/Layout/LayoutHome"));
const ForgotPassword = React.lazy(
  () => import("../pages/Login/LoginPageItem/ForgotPassword")
);
const Login = React.lazy(() => import("../pages/Login/LoginPageItem/Login"));
const EmployeeInfoPage = React.lazy(
  () => import("../pages/EmployeePage/EmployeeInfoPage")
);
const EmployeePage = React.lazy(
  () => import("../pages/EmployeePage/EmployeePage")
);
const LoginPage = React.lazy(() => import("../pages/Login/LoginPage"));

const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
export const Routers: React.FC = () => {
  const auth = Cookies.get(ACCESS_TOKEN_KEY);

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path={ROUTES.auth} element={<LoginPage />}>
          <Route index path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
        </Route>
        {/* <Route path="/" element={<ProtectedRoute />} /> */}

        <Route path="/" element={<LayoutHome />}>
          <Route path={ROUTES.employee} element={<EmployeePage />} />
          <Route path={ROUTES.employee_info} element={<EmployeeInfoPage />} />
          <Route path={ROUTES.employee_create} element={<EmployeeInfoPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
