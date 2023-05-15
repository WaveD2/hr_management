// import "./style.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import callAPI from "../../services/fetchApi";
import { useDispatch } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";

const EmployeePage: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean>();
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
        setDataTable(resData);
      })
      .catch((error) => console.log(error));
  }, []);

  const rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <Table
      rowSelection={{
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
      }}
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
            history.push(`/employee/create-or-update/:${rowIndex}`);
          },
        };
      }}
      style={{ cursor: "pointer", maxHeight: "525px" }}
    />
  );
};
export default EmployeePage;
