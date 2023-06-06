import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/Inputs/Input";
import { Form } from "antd";
import InputDate from "../../../components/Inputs/InputDate";
import InputSelect from "../../../components/Inputs/InputSelect";
import { useSelector } from "react-redux";
import callAPI from "../../../services/fetchApi";
import { AxiosResponse } from "axios";
import { API_PATHS } from "../../../services/api";
import { useParams } from "react-router";
const Information = () => {
  // const [dataTable, setDataTable] = useState<any>();
  const { id } = useParams();
  // if (id) {

  //   setDataTable(resDetail);
  // }
  const resDetail = useSelector((state: any) => state?.employee.employeeDetail);
  const [marriage, setMarriage] = useState();

  useEffect(() => {
    callAPI({
      baseUrl: API_PATHS.defaultAPI,
      isUrlParams: false,
      method: "GET",
      params: "marriage",
    })
      .then((response: AxiosResponse) => {
        setMarriage(response.data.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const {
    bank_account_no,
    card_number,
    tel_no,
    mother_name,
    ktp_no,
    staff_id,
    name: nameUser,
    pob,
    gender,
    dob,
    safety_insurance_no,
    contract_start_date,
    nc_id,
    home_address_1,
    home_address_2,
    health_insurance_no,
    family_card_number,
    bank_name,
    mobile_no,
  } = resDetail;

  const genders = ["Male", "Female"];
  return (
    <Form className="grid grid-cols-2 pb-5">
      {id && (
        <InputComponent
          defaultValue={id ? staff_id : ""}
          textInput={"NIK"}
          isDisabled={true}
          keyInput="staff_id"
        />
      )}

      <InputSelect
        valueSelect={genders}
        indexSelect={gender}
        textSelect={"Gender"}
        isRules={true}
        keySelect="gender"
      />
      <InputComponent
        textInput={"Name"}
        isRules={true}
        defaultValue={id ? nameUser : ""}
        keyInput="name"
      />
      <InputComponent
        textInput={"Mother Name"}
        keyInput="mother_name"
        defaultValue={id ? mother_name : ""}
      />
      <InputDate
        textInputDate="Date of birth"
        typeInputDate="datePicker"
        defaultValue={dob}
        keyInput="dob"
      />
      <InputComponent
        textInput={"Place of birth"}
        defaultValue={id ? pob : ""}
        keyInput="pob"
      />
      <InputComponent
        textInput={"Mobile No."}
        defaultValue={id ? mobile_no : ""}
        keyInput="mobile_no"
      />
      <InputComponent textInput={"Tel No."} defaultValue={id ? tel_no : ""}
      keyInput="tel_no"
      />
      <InputSelect
        valueSelect={marriage}
        textSelect={"Marriage Status"}
        defaultValue="Choose Marriage Status "
        keySelect="marriage"
      />
      <InputComponent textInput={"KTP No"} defaultValue={id ? ktp_no : ""} keyInput="ktp_no"/>
      <InputComponent
        textInput={"National Card ID"}
        defaultValue={id ? nc_id : ""}
        keyInput ="nc_id" 
      />
      <InputComponent
        textInput={"Home Address 1"}
        defaultValue={id ? home_address_1 : ""}
        keyInput ="home_address_1"

      />
      <InputComponent
        textInput={"Home Address 2"}
        defaultValue={id ? home_address_2 : ""}
        keyInput ="home_address_2"

      />
      <InputComponent
        textInput={"Bank Card No."}
        defaultValue={id ? card_number : ""}
        keyInput ="card_number"

      />
      <InputComponent
        textInput={"Bank Account No."}
        defaultValue={id ? bank_account_no : ""}
        keyInput="bank_account_no"
      />
      <InputComponent
        textInput={"Bank Name"}
        defaultValue={id ? bank_name : ""}
        keyInput="bank_name"
      />
      <InputComponent
        textInput={"Family Card Number"}
        defaultValue={id ? family_card_number : ""}
        keyInput="family_card_number"
      />
      <InputComponent
        textInput={"Safety Insurance No."}
        defaultValue={id ? safety_insurance_no : ""}
        keyInput="safety_insurance_no"

      />
      <InputComponent
        textInput={"Health Insurance No."}
        defaultValue={id ? health_insurance_no : ""}
        keyInput="health_insurance_no"  
        
      />
    </Form>
  );
};

export default Information;
