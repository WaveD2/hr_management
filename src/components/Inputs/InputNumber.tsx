import React from "react";
import { InputNumber, Form } from "antd";
import {useDispatch} from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
interface IINumber {
  text: string;
  value?: number | any;
  keyInput ?: string ;

}

const InputNumberComponent = (props: IINumber) => {
  const onChange = (value: number) => {
    console.log("changed", value);
  };
  const dispatch = useDispatch();

  return (
    <Form.Item label={props.text} required>
      <InputNumber
        onBlur ={(e : any)=>{   
          const keyUser : string | any = props.keyInput;
          const valueUser : string | number | any = e.target.value;

          const newKeyUser= {};
          newKeyUser[keyUser] = valueUser ;
          console.log("newKeyUser ," ,newKeyUser)
          dispatch(employeeAction.addInfoDetailUser(newKeyUser));

        }}
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
