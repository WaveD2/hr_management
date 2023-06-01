import React, { useEffect, useState } from "react";
import { Form } from "antd";
import InputSelect from "../../../components/Inputs/InputSelect";
import InputComponent from "../../../components/Inputs/Input";
import TableDetail from "../../../components/Table/Table";
import callAPI from "../../../services/fetchApi";
import { API_PATHS } from "../../../services/api";
import TextArea from "antd/es/input/TextArea";
import UpLoadFile from "../../../components/Button/UpLoadFile";
import { useDispatch } from "react-redux";
import { employeeAction } from "../../../redux/ReducerEmployee/reducerEmployee";
import { useParams } from "react-router";
import { convertDate } from "../../../utils/convertTime";

const Others = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [grade, setGrade] = useState();
  const [benefit, setBenefit] = useState();
  const [value, setValue] = useState("");
  const [timeDate, setTimeDate] = useState<string>();
  const [binaryFile, setBinaryFile] = useState<any>();

  useEffect(() => {
    const fetchAPI = async () => {
      await callAPI({
        baseUrl: API_PATHS.defaultAPI,
        isUrlParams: false,
        method: "GET",
        params: "grade",
      }).then((res) => {
        if (res.status === 200 && res?.data.message === "Success") {
          const dataGrade = res?.data.data;
          setGrade(dataGrade);
        } else {
          alert("Error");
        }
      });
    };
    fetchAPI();
  }, []);
  useEffect(() => {
    const fetchAPI = async () => {
      await callAPI({
        baseUrl: API_PATHS.defaultAPI,
        isUrlParams: false,
        method: "GET",
        params: "benefit",
      }).then((res) => {
        if (res.status === 200 && res?.data.message === "Success") {
          const dataBenefit = res?.data.data;
          setBenefit(dataBenefit);
        } else {
          console.log("Error");
        }
      });
    };
    fetchAPI();
  }, []);

  const handleImageUpload = async (binaryData) => {
    const dateString = binaryData.lastModifiedDate;
    const formattedDate = await convertDate({ dateString });
    setTimeDate(formattedDate);
    setBinaryFile(binaryData);
  };

  useEffect(() => {
    dispatch(
      employeeAction.addEmployeeOtherImage({
        employee_id: id,
        id: Math.random(),
        name: binaryFile?.name,
        date: timeDate,
        document: binaryFile,
      })
    );
  }, [timeDate, binaryFile]);

  return (
    <section className="fontFamily">
      <InputSelect
        textSelect="Grade"
        valueSelect={grade}
        defaultValue="Choose Grade"
      />
      <InputSelect
        textSelect="Benefit"
        valueSelect={benefit}
        defaultValue="Choose Benefit"
      />

      <Form.Item
        name="bio"
        className="overflow-y-auto overflow-x-hidden text-base w-full items-center inline-flex overflow-hidden p-1 ant-form-item "
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>

      <InputComponent textInput="HRM User Account" name="" />

      <div className="mt-4">
        <UpLoadFile
          isMultiple={true}
          onImageUpload={handleImageUpload}
          isShowUploadList={false}
        />

        <TableDetail typeTable="other" />
      </div>
    </section>
  );
};

export default Others;
