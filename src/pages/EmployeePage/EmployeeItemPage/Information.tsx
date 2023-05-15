import React from "react";
import InputComponent from "../../../components/Inputs/Input";
import { Form } from "antd";
import InputDate from "../../../components/Inputs/InputDate";
import InputSelect from "../../../components/Inputs/InputSelect";
import UpLoadFile from "../../../components/Button/UpLoadFile";
import TableDetail from "../../../components/Table/TableDetail";
import CheckBox from "../../../components/Form/CheckBox";

import { useSelector } from "react-redux";

const Information = () => {
  const detailTable = useSelector((state: any) => state?.employee);
  console.log("detailTable", detailTable);

  return (
    <section>
      <Form className="flex flex-wrap pb-5 gap-3">
        <InputComponent
          defaultValue={"SP-004537"}
          textInput={"NIK"}
          isDisabled={true}
          valueInput={"SP-004537"}
        />
        <InputSelect valueSelect={["Male", "Female"]} textSelect={"Gender"} />
        <InputComponent textInput={"Mother Name"} />
        <InputDate textInputDate="Date of birth" typeInputDate="datePicker" />
        <InputComponent textInput={"Place of birth"} />
        <InputComponent textInput={"KTP No.*"} defaultValue="123" />
        <InputComponent textInput={"National Card ID"} defaultValue="123" />
        <InputComponent textInput={"Home Address 1"} />
        <InputComponent textInput={"Home Address 2"} />
        <InputComponent textInput={"Mobile No."} />
        <InputComponent textInput={"Tel No."} />
        <InputSelect
          valueSelect={["N/A", "Not Married", "Single"]}
          textSelect={"Marriage Status"}
        />
        <InputComponent textInput={"Bank Card No."} />
        <InputComponent textInput={"Bank Account No."} />
        <InputComponent textInput={"Bank Name"} />
        <InputComponent textInput={"Family Card Number"} />
        <InputComponent textInput={"Safety Insurance No."} />
        <InputComponent textInput={"Health Insurance No."} />
      </Form>
    </section>
  );
};

export default Information;
