import React from "react";
import { InputNumber, Form } from "antd";

interface IINumber {
  text: string;
  defaultValue?: string | any;
}

const InputNumberComponent = (props: IINumber) => {
  const onChange = (value: number) => {
    console.log("changed", value);
  };

  return (
    <Form.Item label={props.text} required>
      <InputNumber
        min={1}
        defaultValue={props.defaultValue}
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
};

export default InputNumberComponent;
