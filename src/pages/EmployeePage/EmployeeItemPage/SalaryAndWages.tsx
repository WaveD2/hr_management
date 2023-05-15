import React from "react";
import InputNumberComponent from "../../../components/Inputs/InputNumber";

const SalaryAndWages = () => {
  return (
    <section>
      <InputNumberComponent text="Basic Salary" defaultValue="4000000" />
      <InputNumberComponent
        text="Basic Salary (Audit)"
        defaultValue="4000000"
      />
      <InputNumberComponent
        text="Safety Insurance Amount
"
        defaultValue="4000000"
      />
      <InputNumberComponent
        text="Healthy Insurance Amount"
        defaultValue="4000000"
      />
      <InputNumberComponent text="Meal Allowance" defaultValue="4000000" />
    </section>
  );
};

export default SalaryAndWages;
