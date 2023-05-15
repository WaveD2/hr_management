import React, { useState } from "react";
import InputComponent from "./Inputs/Input";
import ButtonComponent from "./Button/Button";
import { Form } from "antd";

const HandleForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleConfirm = async (value) => {
    console.log(value);
  };
  return (
    <Form onFinish={handleConfirm}>
      <InputComponent
        textInput="Your work email"
        valueInput={email}
        isRules={true}
      />
      <ButtonComponent
        textBtn="Confirm & Sent OTP"
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
