import React, { useState } from "react";
import InputComponent from "./Inputs/Input";
import ButtonComponent from "./Button/Button";
import { Form } from "antd";
import { useTranslation } from "react-i18next";
import callAPI from "../services/fetchApi";
import { API_PATHS } from "../services/api";
import { useNavigate } from "react-router";
import Notification from "./Notification";

const HandleForgotPassword = () => {
  const { t } = useTranslation(["home"]);
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleConfirm = (values: any) => {
    const { email } = values;
    setEmail(email);
    callAPI({
      isUrlParams: false,
      baseUrl: API_PATHS.defaultAPI,
      params: "forgot-password",
      method: "POST",
      data: { email },
    })
      .then(function (response: any) {
        if (
          response.data.message === "Success" &&
          response.data.result === true
        ) {
          navigate("/auth/login");
          Notification({ text: "Gửi mã thành công", type: "sucesss" });
        } else {
          Notification({ text: "Lỗi thông tin email ", type: "error" });
        }
      })
      .catch(function (error) {
        Notification({ text: "Lỗi thông tin email !", type: "error" });
      });
  };

  return (
    <Form onFinish={handleConfirm}>
      <InputComponent
        textInput={t("home lang.email")}
        valueInput={email}
        isRules={true}
        name="email"
      />
      <ButtonComponent
        textBtn={t("home lang.confirm")}
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

export default HandleForgotPassword;
