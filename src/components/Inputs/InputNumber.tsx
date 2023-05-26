import React from "react";
import { InputNumber, Form } from "antd";

interface IINumber {
  text: string;
  value?: number | any;
}

const InputNumberComponent = (props: IINumber) => {
  const onChange = (value: number) => {
    console.log("changed", value);
  };

  return (
    <Form.Item label={props.text} required>
      <InputNumber
        value={props.value}
        min={1}
        style={{
          display: "flex",
          width: "100%",
          margin: "0 12px",
          alignItems: "center",
        }}
      />
    </Form.Item>
  );
};

export default InputNumberComponent;
