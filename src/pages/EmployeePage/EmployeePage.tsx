// import "./style.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import callAPI from "../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
import ButtonComponent from "../../components/Button/Button";
import { FileAddOutlined, DeleteOutlined } from "@ant-design/icons";

const EmployeePage: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean>();

  const selector = useSelector(
    (state) => state.employee.employeeListValueTable
  );

  const [columns, setColumns] = useState();
  const [dataTable, setDataTable] = useState<any>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    callAPI({
      method: "GET",
      params: "employee",
    })
      .then((res) => {
        const firstObj = res?.data.data.data[0] || {};
        const cols = [];

        for (const key in firstObj) {
          let newKey = key.replace("_", " ").replace("_id", "");
          newKey = newKey.replace(/\b\w/g, (c) => c.toUpperCase());
          const col = {
            title: newKey,
            dataIndex: key,
          };
          cols.push(col);
        }
        const resData = res?.data.data.data;

        for (let i = 0; i < resData.length; i++) {
          resData[i].key = i;
        }
        dispatch(employeeAction.addListValuesTable(resData));
        setColumns(cols);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setDataTable(selector);
  }, [selector]);

  const rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <section>
      <div className="flex justify-end ml-1 p-3 gap-3 border-b-2 border-indigo-500 mb-3">
        <ButtonComponent
          icon={<FileAddOutlined />}
          textBtn={"Add"}
          style={{
            backgroundColor: "#edf6ff",
            color: "#0091ff",
          }}
        />
        <ButtonComponent
          disabled={true}
          icon={<DeleteOutlined />}
          textBtn={"Delete"}
          style={{ backgroundColor: "#f1f3f5", color: "#c3c8cd" }}
        />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataTable}
        scroll={{ x: 200, y: 150 }}
        pagination={{
          pageSize: 20,
        }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              event.preventDefault();
              dispatch(employeeAction.detailValueTable(record));
              history.push(`/employee/create-or-update/${rowIndex}`);
            },
          };
        }}
        style={{ cursor: "pointer", maxHeight: "525px" }}
      />
    </section>
  );
};
export default EmployeePage;
