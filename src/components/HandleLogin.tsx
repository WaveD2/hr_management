import React, { useEffect, useState } from "react";
import { Form } from "antd";
import "./style.css";
import InputSelect from "./Inputs/InputSelect";
import InputComponent from "./Inputs/Input";
import ButtonComponent from "./Button/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/validate";
import Notification from "./Notification";
import { API_PATHS } from "../services/api";
import { RESPONSE_STATUS_SUCCESS } from "../constants/httpResponseCode";
import callAPI from "../services/fetchApi";
import { useTranslation } from "react-i18next";

type valueLogin = {
  factory: string;
  password: string;
  username: string;
};

const HandleLogin = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["home"]);

  const [valueSelect, setValueSelect] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    const fetchSelect = async () => {
      const res = await callAPI({
        isUrlParams: false,
        baseUrl: API_PATHS.defaultAPI,
        method: "GET",
        params: "company",
      });
      console.log("res", res);

      if (res.status === RESPONSE_STATUS_SUCCESS) {
        setValueSelect(res?.data.data);
      } else {
        console.log("error login");
      }
    };
    fetchSelect();
  }, []);

  const onFinish = React.useCallback(
    async (value: valueLogin) => {
      console.log("valueSelect", valueSelect);
      console.log("value", value);
      const { password, username, factory } = value;
      console.log("password, username, factory ", password, username, factory);

      const company_Select: any = valueSelect.find(
        (item: any) => item.id === Number(factory) + 1
      );
      console.log("company_Select", company_Select);

      const { id } = company_Select;
      callAPI({
        isUrlParams: true,
        baseUrl: API_PATHS.signIn,
        method: "POST",
        data: { company_id: Number(id), password, username },
      })
        .then(function (response: any) {
          if (
            response.data.message === "Success" &&
            response.data.result === true
          ) {
            Cookies.set(ACCESS_TOKEN_KEY, response.data.data.token);
            navigate("/employee");
            Notification({ text: "Đăng nhập thành công", type: "sucesss" });
          } else {
            Notification({ text: "Đăng nhập không thành công", type: "error" });
          }
        })
        .catch(function (error) {
          Notification({ text: "Lỗi thông tin đăng nhập !", type: "error" });
        });
    },
    [valueSelect]
  );

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <InputComponent
        textInput={t("home lang.username")}
        name="username"
        valueInput={userName}
        isRules={true}
      />
      <InputComponent
        textInput={t("home lang.password")}
        name="password"
        valueInput={password}
        isRules={true}
      />
      <InputSelect
        name="factory"
        textSelect={t("home lang.factory")}
        valueSelect={valueSelect}
        isRules={true}
        defaultValue="Select Factory"
      />
      <ButtonComponent
        textBtn={t("home lang.login")}
        htmlType="submit"
        style={{
          color: "rgb(251, 253, 255)",
          backgroundColor: " rgb(0, 145, 255)",
          width: "100%",
          padding: "8px 22px",
          marginTop: "18px",
          height: "48px",
        }}
      />
    </Form>
  );
};

export default HandleLogin;
