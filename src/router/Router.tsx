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

const Layout = React.lazy(() => import("../components/Layout/Layout"));
const LoginLayout = React.lazy(
  () => import("../components/Layout/LayoutLogin")
);
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

export const Routers: React.FC = () => {
  const location = useLocation();

  return (
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch location={location}>
          {/* <Redirect from="/" to={ROUTES.login} exact /> */}
          <Route path={ROUTES.auth} component={LoginLayout} />
          <Route path={ROUTES.employee} component={Layout} />
          {/* <ProtectedRoute path={ROUTES.employee} component={Layout} /> */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};
