import React from "react";
import { Tabs } from "antd";
import Information from "./EmployeeItemPage/Information";
import Contract from "./EmployeeItemPage/Contract";
import Others from "./EmployeeItemPage/Others";
import Details from "./EmployeeItemPage/Details";
import SalaryAndWages from "./EmployeeItemPage/SalaryAndWages";
import ButtonComponent from "../../components/Button/Button";
import TitleComponents from "../../components/TitleComponents";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import callAPI from "../../services/fetchApi";
import { API_PATHS } from "../../services/api";
import { AxiosResponse } from "axios";

const ListTab = [
  { id: 1, title: "Employee Information", component: <Information /> },
  { id: 2, title: "Contract Information", component: <Contract /> },
  { id: 3, title: " Employment Details", component: <Details /> },
  { id: 4, title: "Salary & Wages", component: <SalaryAndWages /> },
  { id: 5, title: "Others", component: <Others /> },
];
const EmployeeInfoPage = () => {
  const select = useSelector((state: any) => state.employee);

  const { t } = useTranslation(["home"]);

  const onChange = (key: string) => {
    console.log(key);
  };


  React.useEffect(() => {
    
  }, []);


  const handleSaveEmployee = () => {
    //https://api.hrm.div4.pgtest.co/api/v1/employee
    console.log(" API_PATHS.detailEmployee" , API_PATHS.detailEmployee);
    
    callAPI({
      baseUrl: API_PATHS.detailEmployee,
      isUrlParams: true,
      method: "POST",
      data : select.employeeInfoDetailUser
    })
      .then((response: AxiosResponse) => {
       console.log("thanfh cong");
       
      })
      .catch((error: any) => {
       console.log("that bai");
       
       
      });
   
  };

  return (
    <section>
      <div className="flex justify-between items-center pb-3  #">
        <TitleComponents title={`HR ${t("home lang.management system")}`} />
        <ButtonComponent
          handleCLick={handleSaveEmployee}
          textBtn={t("home lang.save change")}
          style={{ background: "rgb(0, 145, 255)", color: "#Fff" }}
        />
      </div>
      <Tabs defaultActiveKey="1" type="card">
        {ListTab.map((tab) => (
          <Tabs.TabPane className="flex flex-wrap" tab={tab.title} key={tab.id}>
            <section className="w-full">
              <div className="flex items-center justify-between pb-2 border-b-2 border-indigo-500 ">
                <h4 className="flex-1 text-xl">{tab.title}</h4>

                <p className="flex-shrink-0 text-sm font-normal text-[#a2a3a3]">
                  {t("home lang.required")}
                  &nbsp;(
                  <span className="text-base text-[#e5484d]">*</span>)
                </p>
              </div>
            </section>
            <section className="mt-4 w-full overflow-hidden">
              {tab.component}
            </section>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </section>
  );
};

export default EmployeeInfoPage;
