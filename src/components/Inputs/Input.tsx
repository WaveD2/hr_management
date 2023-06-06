import React from "react";
import { Form, Input } from "antd";
import {useDispatch} from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";

interface IInput {
  defaultValue?: string;
  textInput: string;
  autoCorrect?: boolean;
  isDisabled?: boolean;
  isRules?: boolean;
  style?: string;
  valueInput?: string;
  name?: string;
  keyInput ?:string;
}

const InputComponent = (props: IInput) => {

const dispatch = useDispatch();

  

  return (
    <Form.Item
      name={props.name}
      label={props.textInput}
      rules={[
        {
          required: props.isRules,
          message: `Please enter ${props.textInput.toLowerCase()}`,
        },
      ]}>
      <Input
        key={props.keyInput}
        disabled={props.isDisabled}
        defaultValue={props.defaultValue}
        value={props.valueInput}
        style={{ padding: "12px" }}
        onBlur ={(e)=>{   
          const keyUser : string | any = props.keyInput;
          const valueUser : string | number | any = e.target.value;

          const newKeyUser= {};
          newKeyUser[keyUser] = valueUser;
          dispatch(employeeAction.addInfoDetailUser(newKeyUser));

        }}  
      />
    </Form.Item>
  );
};

export default InputComponent;
