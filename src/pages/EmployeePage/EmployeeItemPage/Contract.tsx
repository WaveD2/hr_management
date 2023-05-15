import React from "react";
import InputComponent from "../../../components/Inputs/Input";
import InputDate from "../../../components/Inputs/InputDate";
import UpLoadFile from "../../../components/Button/UpLoadFile";
import ButtonComponent from "../../../components/Button/Button";
import TableComponent from "../../../components/Table/Table";

const Contract = () => {
  return (
    <section>
      <InputDate
        defaultValue={"2019-01-25"}
        textInputDate="Date Start"
        typeInputDate="datePicker"
      />
      <InputComponent
        textInput="InputComponent"
        isDisabled={true}
        defaultValue="Contract"
        valueInput="Contract"
        rules={[{}]}
      />
      <div
        className="flex flex-col rounded-md"
        style={{
          border: " 1px solid rgb(223, 227, 230)",
        }}>
        <h4 className="py-1 px-5 text-[#687076] font-semibold text-xs bg-slate-300">
          CONTRACT
        </h4>
        <p className="py-1 px-5 text-sm font-normal text-[#687076] ">
          Please upload pdf, png, xlsx, docx file format!
        </p>
        <hr />
        <div
          className="flex flex-wrap gap-5  "
          style={{ padding: "20px 14px 30px 20px" }}>
          <form className="flex flex-col max-w-[400px] gap-2 flex-1">
            <InputDate textInputDate="Date Start" typeInputDate="datePicker" />
            <InputComponent
              textInput="InputComponent"
              isDisabled={true}
              defaultValue="Contract"
              valueInput="Contract"
              rules={[{}]}
            />
            <div className="flex gap-2 items-center">
              <UpLoadFile />
              <ButtonComponent text="Add" size="middle" />
            </div>
          </form>
          <hr />
          <div className="flex-1 w-full">
            <TableComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
