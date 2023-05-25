import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/Inputs/Input";
import { Form } from "antd";
import InputDate from "../../../components/Inputs/InputDate";
import InputSelect from "../../../components/Inputs/InputSelect";
import { useSelector } from "react-redux";
import callAPI from "../../../services/fetchApi";
import { AxiosResponse } from "axios";
import { API_PATHS } from "../../../services/api";

const Information = () => {
  const [marriage, setMarriage] = useState();
  const detailTable = useSelector(
    (state: any) => state?.employee.employeeDetail
  );
  // console.log("detailTable", detailTable);

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
  } = detailTable;

  const genders = ["Male", "Female"];
  return (
    <section>
      <Form className="flex flex-wrap pb-5 gap-2">
        <InputComponent
          defaultValue={staff_id}
          textInput={"NIK"}
          isDisabled={true}
        />
        <InputSelect
          valueSelect={genders}
          indexSelect={gender}
          textSelect={"Gender"}
          isRules={true}
        />
        <InputComponent
          textInput={"Name"}
          isRules={true}
          defaultValue={nameUser}
        />
        <InputComponent textInput={"Mother Name"} defaultValue={mother_name} />
        <InputDate
          textInputDate="Date of birth"
          typeInputDate="datePicker"
          defaultValue={dob}
        />
        <InputComponent
          textInput={"Place of birth"}
          defaultValue={contract_start_date}
        />

        <InputComponent textInput={"Mobile No."} defaultValue={mobile_no} />
        <InputComponent textInput={"Tel No."} defaultValue={tel_no} />
        <InputSelect
          valueSelect={marriage}
          textSelect={"Marriage Status"}
          defaultValue="Choose Marriage Status "
        />
        <InputComponent textInput={"KTP No.*"} defaultValue={ktp_no} />
        <InputComponent textInput={"National Card ID"} defaultValue={nc_id} />
        <InputComponent
          textInput={"Home Address 1"}
          defaultValue={home_address_1}
        />
        <InputComponent
          textInput={"Home Address 2"}
          defaultValue={home_address_2}
        />
        <InputComponent
          textInput={"Bank Card No."}
          defaultValue={card_number}
        />
        <InputComponent
          textInput={"Bank Account No."}
          defaultValue={bank_account_no}
        />
        <InputComponent textInput={"Bank Name"} defaultValue={bank_name} />
        <InputComponent
          textInput={"Family Card Number"}
          defaultValue={family_card_number}
        />
        <InputComponent
          textInput={"Safety Insurance No."}
          defaultValue={safety_insurance_no}
        />
        <InputComponent
          textInput={"Health Insurance No."}
          defaultValue={health_insurance_no}
        />
      </Form>
    </section>
  );
};

export default Information;
