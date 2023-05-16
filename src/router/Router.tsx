import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import { ROUTES } from "../constants/routerConstants";
import ProtectedRoute from "../context/ProtectedRoute";
import ProtectedRouteLogin from "../context/ProtectedRouteLogin";

const RouterLayOut = React.lazy(
  () => import("../components/Layout/RouterLayOut")
);
const RouterLogin = React.lazy(
  () => import("../components/Layout/RouterLogin")
);
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

export const Routers: React.FC = () => {
  const location = useLocation();

  return (
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch location={location}>
          <Redirect from="/" to={ROUTES.login} exact />
          <ProtectedRoute path={ROUTES.employee} component={RouterLayOut} />
          <ProtectedRouteLogin path={ROUTES.auth} component={RouterLogin} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};
