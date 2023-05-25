import { useEffect, useState } from "react";
import React from "react";
import InputSelect from "../../../components/Inputs/InputSelect";
import CheckBox from "../../../components/Form/CheckBox";
import callAPI from "../../../services/fetchApi";
import { API_PATHS } from "../../../services/api";
const Details = () => {
  const [selectMarriage, setSelectMarriage] = useState();
  const [selectPosition, setSelectPosition] = useState();

  useEffect(() => {
    callAPI({
      baseUrl: API_PATHS.defaultAPI,
      isUrlParams: false,
      method: "GET",
      params: "department",
    }).then((res) => {
      if (res.status === 200 && res?.data.message === "Success") {
        const dataUser = res?.data.data;
        setSelectMarriage(dataUser);
      } else {
        alert("Error");
      }
    });
  }, []);
  useEffect(() => {
    callAPI({
      baseUrl: API_PATHS.defaultAPI,
      isUrlParams: false,
      method: "GET",
      params: "position",
    }).then((res) => {
      if (res.status === 200 && res?.data.message === "Success") {
        const dataUser = res?.data.data;
        setSelectPosition(dataUser);
      } else {
        console.log("Error");
      }
    });
  }, []);

  return (
    <section className="flex flex-col p-3">
      <InputSelect
        defaultValue="Choose Marriage"
        valueSelect={selectMarriage}
        textSelect={"Marriage Status"}
      />
      <InputSelect
        defaultValue="Choose Position"
        valueSelect={selectPosition}
        textSelect={"Position"}
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
