import React from "react";
import { InputNumber, Form } from "antd";

interface IINumber {
  text: string;
  defaultValue?: string;
}

const InputNumberComponent = (props: IINumber) => {
  const onChange = (value: number) => {
    console.log("changed", value);
  };

  return (
    <Form.Item
      label={props.text}
      style={{ width: "410px" }}
      rules={[{ required: true }]}>
      <InputNumber
        min={1}
        max={10}
        defaultValue={3}
        onChange={onChange}
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
};

export default InputNumberComponent;
