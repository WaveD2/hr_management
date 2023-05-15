import React, { lazy, ReactNode, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ROUTES } from "../../constants/routerConstants";

const LoginPage = React.lazy(() => import("../../pages/Login/LoginPage"));
const ForgotPassword = React.lazy(
  () => import("../../pages/Login/LoginPageItem/ForgotPassword")
);
const Login = React.lazy(() => import("../../pages/Login/LoginPageItem/Login"));
const LoginLayout = () => {
  const location = useLocation();
  // const pathName = window.location.pathname;

  return (
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        <LoginPage>
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.forgotPassword} component={ForgotPassword} />
        </LoginPage>
      </Suspense>
    </Router>
  );
};

export default LoginLayout;
