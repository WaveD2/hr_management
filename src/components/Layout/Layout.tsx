import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ROUTES } from "../../constants/routerConstants";
const EmployeePage = React.lazy(
  () => import("../../pages/EmployeePage//EmployeePage")
);
const LayoutHome = React.lazy(() => import("./LayoutHome"));
const EmployeeInfoPage = React.lazy(
  () => import("../../pages/EmployeePage//EmployeeInfoPage")
);

const Layout = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <LayoutHome>
        <Switch>
          <Route path={ROUTES.employee_info} component={EmployeeInfoPage} />
          <Route path={ROUTES.employee} component={EmployeePage} />
        </Switch>
      </LayoutHome>
    </Suspense>
  );
};

export default Layout;
