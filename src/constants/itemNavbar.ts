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
      { icon: attendance_icon, text: "Attendance Management" },
      {
        icon: leave_icon,
        text: "Leave Management",
      },
      {
        icon: payroll_icon,
        text: "Payroll Management",
      },
      {
        icon: employee_icon,
        text: "Employee Management",
      },
      {
        icon: user_icon,
        text: "User Management",
      },
      {
        icon: master_icon,
        text: "Master Management",
      },
    ],
  },
  advance: {
    title: "Advance",
    itemNavBar: [
      {
        icon: global_icon,
        text: "Global Setting",
      },
      {
        icon: global_icon,
        text: "Setting",
      },
    ],
  },
};
