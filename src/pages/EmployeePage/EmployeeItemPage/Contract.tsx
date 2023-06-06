import React, { ChangeEvent, useState } from "react";
import InputComponent from "../../../components/Inputs/Input";
import InputDate from "../../../components/Inputs/InputDate";
import UpLoadFile from "../../../components/Button/UpLoadFile";
import ButtonComponent from "../../../components/Button/Button";
import TableComponent from "../../../components/Table/Table";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { employeeAction } from "../../../redux/ReducerEmployee/reducerEmployee";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const Contract = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
 
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const detailTable = useSelector(
    (state: any) => state?.employee.employeeDetail
  );

  const { contract_start_date, id } = detailTable;

  const handleOnFinish = (value) => {
    
    const dateString = value.contractDate.$d;
    const dateObject = new Date(dateString);
    const formattedDate = dayjs(dateObject).format("YYYY/MM/DD");
    
    const nameString = value.contractName;
    console.log("selectedFile && formattedDate && nameString" ,selectedFile ,formattedDate ,nameString);
  if(selectedFile && formattedDate && nameString ){ 
    dispatch(
      employeeAction.addEmployeeContractImage({
        employee_id: id,
        id: Math.random(),
        name: nameString,
        date: formattedDate,
        document: selectedFile,
      })
    )}
    else{
      alert("thiếu ")
    }
  };

  const handleImageUpload = (binaryData: File) => {
   console.log("binaryData" ,binaryData);
  
    setSelectedFile(binaryData);
  };

  return (
    <section className="fontFamily">
      <InputDate
        defaultValue={contract_start_date}
        textInputDate="Date Start"
        typeInputDate="datePicker"
        nameInputDate="date-start"
        keyInput="contract_start_date"
      />
      <InputComponent
        textInput="Employee Type"
        isDisabled={true}
        defaultValue="Part-time"
        valueInput="Part-time"
        name="employee-type"
       

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
        <div className="gap-5 " style={{ padding: "20px 14px 30px 20px" }}>
          <Form
            className="flex flex-col max-w-[400px] gap-2 flex-1 mb-4"
            onFinish={handleOnFinish}>
            <InputDate
              textInputDate="Contract Date"
              typeInputDate="datePicker" 
              nameInputDate="contractDate"
            
              
            />
            <InputComponent
              textInput="Contract Name"
              isRules={true}
              name="contractName"
              valueInput={name}
            />
            <div className=" flex gap-4">
              <UpLoadFile
               
                isMultiple={true}
                onImageUpload={handleImageUpload}
                isShowUploadList={true}
              />
              <ButtonComponent
                htmlType="submit" 
                textBtn="Add"
                style={{ color: "#Fff", background: "#ccc" }}
              />
            </div>
          </Form>
          <hr />
          <section className="mt-4 ">
            <TableComponent typeTable="contract" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contract;
