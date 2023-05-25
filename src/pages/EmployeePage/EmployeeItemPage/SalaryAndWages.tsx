import React, { useEffect, useState } from "react";
import InputNumberComponent from "../../../components/Inputs/InputNumber";
import callAPI from "../../../services/fetchApi";
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeAction } from "../../../redux/ReducerEmployee/reducerEmployee";
import { API_PATHS } from "../../../services/api";

const SalaryAndWages = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const dataSelect = useSelector(
    (state: any) => state.employee.employeeSalary_Wages
  );
  console.log("dataSelect", dataSelect);

  const {
    audit_salary,
    basic_salary,
    health_insurance,
    meal_allowance,
    safety_insurance,
  } = dataSelect;

  const { id } = params;
  const setParams = id ? id : "get-default-salary";
  useEffect(() => {
    callAPI({
      baseUrl: API_PATHS.detailEmployee,
      isUrlParams: false,
      method: "GET",
      params: `/${setParams}`,
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .then((res) => {
        dispatch(employeeAction.addEmployeeSalary_Wages(res.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <InputNumberComponent text="Basic Salary" defaultValue={basic_salary} />
      <InputNumberComponent
        text="Basic Salary (Audit)"
        defaultValue={audit_salary}
      />
      <InputNumberComponent
        text="Safety Insurance Amount"
        defaultValue={safety_insurance}
      />
      <InputNumberComponent
        text="Healthy Insurance Amount"
        defaultValue={health_insurance}
      />
      <InputNumberComponent
        text="Meal Allowance"
        defaultValue={meal_allowance}
      />
    </section>
  );
};

export default SalaryAndWages;
