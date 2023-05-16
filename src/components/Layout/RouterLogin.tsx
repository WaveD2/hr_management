import React, { lazy, ReactNode, Suspense } from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../../constants/routerConstants";
import LoginPage from "../../pages/Login/LoginPage";

const ForgotPassword = React.lazy(
  () => import("../../pages/Login/LoginPageItem/ForgotPassword")
);
const Login = React.lazy(() => import("../../pages/Login/LoginPageItem/Login"));
const RouterLogin = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <LoginPage>
        <Route path={ROUTES.login} component={Login} />
        <Route path={ROUTES.forgotPassword} component={ForgotPassword} />
      </LoginPage>
    </Suspense>
  );
};

export default RouterLogin;
