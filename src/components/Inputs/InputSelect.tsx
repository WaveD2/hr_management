import React from "react";
import { Form, Select } from "antd";

interface ISelect {
  defaultValue?: string;
  textSelect: string;
  autoCorrect?: boolean;
  isAllowClear?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRules?: boolean;
  style?: string;
  valueSelect?: string[] | any;
  onChangeText?: string;
  onFocus?: string;
  onBlur?: string;
}

const InputSelect = (props: ISelect) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form.Item
      initialValue={props.defaultValue}
      name={props.textSelect.toLowerCase()}
      label={props.textSelect}
      rules={[
        {
          required: props.isRules,
          message: `Please enter ${props.textSelect.toLowerCase()}`,
        },
      ]}>
      <Select
        onChange={handleChange}
        style={{
          height: "46px",
          background: "#F1F3F5",
          borderRadius: "6px",
        }}
        defaultValue={props.valueSelect[0]}>
        {props.valueSelect.map((text, index) => (
          <Select.Option value={text?.name} key={index}>
            {text?.name?.toString()}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default InputSelect;
