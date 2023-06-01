import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
interface DataType {
  key: React.Key;
  No: number;
  Name: string;
  time: string;
  action: string;
}

interface IKey {
  typeTable: "other" | "contract" | "table";
}

const columns: ColumnsType<DataType> = [
  {
    title: "No",
    width: 100,
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Document Name",
    width: 200,
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Create At",
    width: 200,
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    width: 100,
    dataIndex: "action",
    key: "action",
  },
];

const TableComponent = ({ typeTable }: IKey) => {
  console.log(typeTable);

  const dispatch = useDispatch();
  const select = useSelector((state: any) => state.employee);
  const { employeeContractImage, employeeOtherImage } = select;
  console.log(employeeContractImage, employeeOtherImage);

  const [dataRender, setDataRender] = useState();
  const [source, setSource] = useState();

  useEffect(() => {
    typeTable === "other"
      ? setDataRender(employeeOtherImage)
      : setDataRender(employeeContractImage);
  }, [employeeContractImage, employeeOtherImage]);

  const handleDelete = (id) => {
    typeTable === "other"
      ? dispatch(employeeAction.deleteEmployeeOtherImage(id))
      : dispatch(employeeAction.deleteEmployeeContractImage(id));
  };

  useEffect(() => {
    const newSource = dataRender?.map((item, index) => ({
      ...item,
      no: index + 1,
      action: (
        <Tag
          color="magenta"
          className="w-[80px] flex gap-2 items-center cursor-pointer"
          onClick={() => {
            handleDelete(item.id);
          }}>
          <DeleteOutlined />
          Delete
        </Tag>
      ),
    }));
    console.log("newSource", newSource);

    setSource(newSource);
  }, [dataRender]);

  return (
    <Table
      style={{
        overflowY: "scroll",
        maxHeight: "225px",
        minHeight: "225px",
      }}
      className="w-full flex-1 border-2 rounded-xl border-[#e2e1e1df] fontFamily"
      columns={columns}
      dataSource={source}
      pagination={false}
    />
  );
};

export default TableComponent;
