import React from "react";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
interface IInputDate {
  typeInputDate: string;
  defaultValue?: any;
  isDisable?: boolean;
  textInputDate: string;
  nameInputDate?: string;
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
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form validateMessages={validateMessages}>
      <Form.Item label={props.textInputDate} name={props.nameInputDate}>
        {props.typeInputDate === "datePicker" ? (
          <DatePicker
            onChange={handleChange}
            defaultValue={dayjs(props.defaultValue, dateFormat)}
            format={dateFormat}
            style={{ padding: "0 10px", maxWidth: "250px", overflow: "hidden" }}
            disabled={props.isDisable}
          />
        ) : (
          <RangePicker
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
    </Form>
  );
};

export default InputDate;
