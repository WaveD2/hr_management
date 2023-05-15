import React from "react";
import { Tabs } from "antd";
import Information from "./EmployeeItemPage/Information";
import Contract from "./EmployeeItemPage/Contract";
import Others from "./EmployeeItemPage/Others";
import Details from "./EmployeeItemPage/Details";
import SalaryAndWages from "./EmployeeItemPage/SalaryAndWages";

const ListTab = [
  { id: 1, title: "Employee Information", component: <Information /> },
  { id: 2, title: "Contract Information", component: <Contract /> },
  { id: 3, title: " Employment Details", component: <Details /> },
  { id: 4, title: "Salary & Wages", component: <SalaryAndWages /> },
  { id: 5, title: "Others", component: <Others /> },
];
const EmployeeInfoPage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Tabs defaultActiveKey="1" type="card">
      {ListTab.map((tab, index) => (
        <Tabs.TabPane className="flex flex-wrap" tab={tab.title} key={tab.id}>
          <section>
            <div className="flex items-center justify-between pb-2 border-b-2 border-indigo-500 ">
              <h4 className="flex-1 text-xl">{tab.title}</h4>

              <p className="flex-shrink-0 text-sm font-normal text-[#a2a3a3]">
                Vui lòng nhập đầy đủ thông tin &nbsp;(
                <span className="text-base text-[#e5484d]">*</span>)
              </p>
            </div>
          </section>
          <section className="mt-4">{tab.component}</section>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default EmployeeInfoPage;