import React from "react";
import { Route, RouteProps } from "react-router-dom";

const ProtectedRouteLogin = (props: RouteProps) => {
  const { ...rest } = props;

  return <Route {...rest} />;
};

export default ProtectedRouteLogin;
