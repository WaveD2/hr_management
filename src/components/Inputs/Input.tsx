import React from "react";
import { Form, Input } from "antd";

interface IInput {
  defaultValue?: string;
  textInput: string;
  autoCorrect?: boolean;
  isDisabled?: boolean;
  isRules?: boolean;
  style?: string;
  valueInput?: string;
  // onChangeText?: string;
  onFocus?: string;
  onBlur?: string;
}

const InputComponent = (props: IInput) => {
  return (
    <Form.Item
      name={props.textInput.toLowerCase()}
      label={props.textInput}
      rules={[
        {
          required: props.isRules,
          message: `Please enter ${props.textInput.toLowerCase()}`,
        },
      ]}>
      <Input
        disabled={props.isDisabled}
        defaultValue={props.defaultValue}
        value={props.valueInput}
        style={{ padding: "12px" }}
        onChange={() => console.log(props.valueInput)}
      />
    </Form.Item>
  );
};

export default InputComponent;