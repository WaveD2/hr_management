import React, { useEffect, useState } from "react";
import { Form } from "antd";
import "./style.css";
import InputSelect from "./Inputs/InputSelect";
import InputComponent from "./Inputs/Input";
import ButtonComponent from "./Button/Button";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/validate";
import { useDispatch } from "react-redux";
import Notification from "./Notification";
import callAPI from "../services/fetchApi";
import { AxiosResponse } from "axios";

Notification;
type valueLogin = {
  factory: string;
  password: string;
  username: string;
};

const HandleLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [valueSelect, setValueSelect] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    callAPI({ method: "GET", params: "company" })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .then((res) => {
        setValueSelect(res.data);
      })
      .catch((error: any) => {
        alert(error);
      });
  }, []);

  const onFinish = async (value: valueLogin) => {
    console.log(value);

    const company_Select: any = valueSelect.find(
      (item: any) => item.name === value.factory
    );
    const { password, username } = value;
    const { id } = company_Select;

    callAPI({
      method: "POST",
      params: "login",
      data: { company_id: Number(id), password, username },
    })
      .then(function (response: any) {
        if (
          response.data.message === "Success" &&
          response.data.result === true
        ) {
          Cookies.set(ACCESS_TOKEN_KEY, response.data.data.token);
          history.push("/employee");
          Notification({ text: "Đăng nhập thành công", type: "sucesss" });
        } else {
          Notification({ text: "Đăng nhập không thành công", type: "error" });
        }
      })
      .catch(function (error) {
        Notification({ text: "Lỗi thông tin đăng nhập !", type: "error" });
      });
  };
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <InputComponent
        textInput="Username"
        valueInput={userName}
        isRules={true}
      />
      <InputComponent
        textInput="Password"
        valueInput={password}
        isRules={true}
      />
      <InputSelect
        textSelect="Factory"
        valueSelect={valueSelect}
        isRules={true}
        defaultValue="Select Factory"
      />
      <ButtonComponent
        textBtn="Sign In"
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
