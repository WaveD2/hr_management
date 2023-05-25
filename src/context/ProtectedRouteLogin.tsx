import React from "react";
import { Outlet, Route, RouteProps, Routes } from "react-router-dom";

const ProtectedRouteLogin = (props: JSX.Element) => {
  // const { ...rest } = props;
  console.log("123");

  return (
    <Routes>
      <Route {...props} />
    </Routes>
  );
};

export default ProtectedRouteLogin;
