import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES } from "../constants/routerConstants";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../constants/validate";

const ProtectedRoute = (props: RouteProps) => {
  const { ...rest } = props;
  const auth = Cookies.get(ACCESS_TOKEN_KEY);
  console.log("auth", auth);

  if (auth) {
    return <Route {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: ROUTES.login,
      }}
    />
  );
};

export default ProtectedRoute;
