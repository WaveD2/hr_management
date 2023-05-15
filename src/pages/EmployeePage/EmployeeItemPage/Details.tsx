import React from "react";
import InputSelect from "../../../components/Inputs/InputSelect";
import CheckBox from "../../../components/Form/CheckBox";

const Details = () => {
  return (
    <section className="flex flex-col p-3">
      <InputSelect
        valueSelect={["N/A", "Not Married", "Single"]}
        textSelect={"Marriage Status"}
      />
      <InputSelect
        valueSelect={["N/A", "Not Married", "Single"]}
        textSelect={"Marriage Status"}
      />

      <CheckBox isDisabled={false} title="Entitled OT" isChecked={true} />
      <CheckBox
        isDisabled={false}
        title="Meal Allowance Paid"
        isChecked={true}
      />
      <CheckBox isDisabled={false} title="Operational Allowance Paid" />
      <CheckBox isDisabled={false} title="Attendance Allowance Paid" />
    </section>
  );
};

export default Details;
