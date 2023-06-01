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
  name?: string;
  indexSelect?: number | any;
}

const InputSelect = (props: ISelect) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form.Item
      initialValue={props.defaultValue}
      name={props.name}
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
        defaultValue={
          props?.defaultValue ||
          props?.valueSelect[props?.indexSelect === "nam" ? 1 : 0]
        }>
        {props.valueSelect?.map((item, index) => (
          <Select.Option key={index}>{item?.name || item}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default InputSelect;
