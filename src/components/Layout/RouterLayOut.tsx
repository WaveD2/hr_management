import React, { Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routerConstants";
const EmployeePage = React.lazy(
  () => import("../../pages/EmployeePage/EmployeePage")
);
const LayoutHome = React.lazy(() => import("./LayoutHome"));
const EmployeeInfoPage = React.lazy(
  () => import("../../pages/EmployeePage/EmployeeInfoPage")
);

const Layout: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <LayoutHome>
        <Route path={ROUTES.employee_info} component={EmployeeInfoPage} />
        <Route exact path={ROUTES.employee} component={EmployeePage} />
      </LayoutHome>
    </Suspense>
  );
};

export default Layout;
