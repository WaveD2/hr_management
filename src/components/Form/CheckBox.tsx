import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

interface ICheckBox {
  title: string;
  isDisabled?: boolean;
  isChecked?: boolean;
}

const CheckBox = (props: ICheckBox) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Checkbox
      onChange={onChange}
      disabled={props.isDisabled}
      checked={props.isChecked}
      style={{ marginInlineStart: 0 }}>
      <span className="text-base font-normal"> {props.title}</span>
    </Checkbox>
  );
};

export default CheckBox;
