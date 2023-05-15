import React from "react";
import { Form, Mentions } from "antd";
import InputSelect from "../../../components/Inputs/InputSelect";
import InputComponent from "../../../components/Inputs/Input";
import TableDetail from "../../../components/Table/TableDetail";
const Others = () => {
  return (
    <section>
      <InputSelect
        textSelect="Grade"
        valueSelect={["dang tung", "age", "class"]}
      />
      <InputSelect
        textSelect="Grade"
        valueSelect={["dang tung", "age", "class"]}
      />

      <div>
        <Form.Item
          name="bio"
          label="Bio"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          rules={[{ required: true }]}>
          <Mentions rows={3} placeholder="You can use @ to ref user here" />
        </Form.Item>

        <InputComponent textInput="HRM User Account" />
        <TableDetail />
      </div>
    </section>
  );
};

export default Others;
