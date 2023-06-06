import React from "react";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {useDispatch} from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";

dayjs.extend(customParseFormat);
interface IInputDate {
  typeInputDate: string;
  defaultValue?: any;
  isDisable?: boolean;
  textInputDate: string;
  nameInputDate?: string;
  handleChangeDate?: Function | any;
  keyInput ?:string;

}

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const dateFormat = "YYYY/MM/DD";

const InputDate = (props: IInputDate) => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();

  return (
    <Form.Item label={props.textInputDate} name={props.nameInputDate}>
      {props.typeInputDate === "datePicker" ? (
        <DatePicker
         onBlur ={(e)=>{   
          const keyUser : string | any = props.keyInput;
          const valueUser : string | number | any = e.target.value;

          const newKeyUser= {};
          newKeyUser[keyUser] = valueUser ;
        
          dispatch(employeeAction.addInfoDetailUser(newKeyUser));

        }}
          onChange={props.handleChangeDate}
          defaultValue={
            props.defaultValue && dayjs(props.defaultValue, dateFormat)
          }
          format={dateFormat}
          style={{ padding: "0 10px", maxWidth: "250px", overflow: "hidden" }}
          disabled={props.isDisable}
        />
      ) : (
        <RangePicker
          onChange={props.handleChangeDate}
          disabled={props.isDisable}
          style={{ padding: "0 10px" }}
          defaultValue={[
            dayjs("2015/01/01", dateFormat),
            dayjs("2015/01/01", dateFormat),
          ]}
          format={dateFormat}
        />
      )}
    </Form.Item>
  );
};

export default InputDate;
