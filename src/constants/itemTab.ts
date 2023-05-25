import attendance_icon from "../assets/img/attendance_icon.svg";
import employee_icon from "../assets/img/employee_icon.svg";
import global_icon from "../assets/img/global_icon.svg";
import leave_icon from "../assets/img/leave.svg";
import master_icon from "../assets/img/master_icon.svg";
import user_icon from "../assets/img/user_icon.svg";
import payroll_icon from "../assets/img/payroll_icon.svg";

export const listMenuNavBar = {
  general: {
    title: "General",
    itemNavBar: [
      {
        icon: attendance_icon,
        text: "Attendance Management",
        key: "attendance",
      },
      {
        icon: leave_icon,
        text: "Leave Management",
        key: "leave",
      },
      {
        icon: payroll_icon,
        text: "Payroll Management",
        key: "payroll",
      },
      {
        icon: employee_icon,
        text: "Employee Management",
        key: "employee",
      },
      {
        icon: user_icon,
        text: "User Management",
        key: "user",
      },
      {
        icon: master_icon,
        text: "Master Management",
        key: "master",
      },
    ],
  },
  advance: {
    title: "Advance",
    itemNavBar: [
      {
        icon: global_icon,
        text: "Global Setting",
        key: "global",
      },
      {
        icon: global_icon,
        text: "Setting",
        key: "setting",
      },
    ],
  },
};

import React from "react";
// import { useTranslation } from "react-i18next";

// const Information = React.lazy(
//   () => import("../pages/EmployeePage/EmployeeItemPage/Information")
// );
// const SalaryAndWages = React.lazy(
//   () => import("../pages/EmployeePage/EmployeeItemPage/SalaryAndWages")
// );
// const Contract = React.lazy(
//   () => import("../pages/EmployeePage/EmployeeItemPage/Contract")
// );
// const Details = React.lazy(
//   () => import("../pages/EmployeePage/EmployeeItemPage/Details")
// );
// const Others = React.lazy(
//   () => import("../pages/EmployeePage/EmployeeItemPage/Others")
// );

// const { t } = useTranslation(["employee"]);

// export const ListTab = [
//   { id: 1, title: `${t("employee.info")}`, component: Information },
//   { id: 2, title: `${t("employee.contract")}`, component: Contract },
//   { id: 3, title: `${t("employee.detail")}`, component: Details },
//   { id: 4, title: `${t("employee.salary_wages")}`, component: SalaryAndWages },
//   { id: 5, title: `${t("employee.others")}`, component: Others },
// ];

// // export const ListTab = [
// //   { id: 1, title: `"Employee Information"`, component: Information },
// //   { id: 2, title: "Contract Information", component: Contract },
// //   { id: 3, title: " Employment Details", component: Details },
// //   { id: 4, title: "Salary & Wages", component: SalaryAndWages },
// //   { id: 5, title: "Others", component: Others },
// // ];
