import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import callAPI from "../../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
import ButtonComponent from "../../components/Button/Button";
import { FileAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { API_PATHS } from "../../services/api";
import TitleComponents from "../../components/TitleComponents";
import Search from "../../components/Button/Search";
import { useTranslation } from "react-i18next";
import { convertColumTable } from "../../utils/convertColumTable";

const EmployeePage: React.FC = () => {
  const { t } = useTranslation();
  const [loadings, setLoadings] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [columns, setColumns] = useState();
  const [dataTable, setDataTable] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selector = useSelector(
    (state: any) => state.employee.employeeListValueTable
  );
  const { current_page, data, last_page, from, per_page, total, to } = selector;

  const getDetailTable = async () => {
    setLoadings(true);
    await callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "GET",
      isUrlParams: true,
    })
      .then((res) => {
        const cols = [];
        const resData = res?.data.data;
        const dataCol = convertColumTable(resData.data) || {};

        for (const key in dataCol[0]) {
          let newKey = key.replace(/_/g, " ").replace("_id", "");
          newKey = newKey.replace(/\b\w/g, (c) => c.toUpperCase());
          const col = {
            title: newKey,
            dataIndex: key,
            width: 100,
          };
          cols.push(col);
        }

        for (let i = 0; i < dataCol.length; i++) {
          dataCol[i]["key"] = i;
        }
        setLoadings(false);
        dispatch(employeeAction.addListValuesTable(resData));
        setColumns(cols);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetailTable();
  }, []);

  useEffect(() => {
    const getRow = async () => {
      const dataRows = await convertColumTable(selector.data);
      for (let i = 0; i < dataRows.length; i++) {
        dataRows[i]["key"] = i;
      }
      setDataTable(dataRows);
    };
    getRow();
  }, [selector]);

  const rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(
        "record, selected, selectedRows",
        record,
        selected,
        selectedRows
      );

      setIsDisabled(selected);
      setDataDelete(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(
        "selected, selectedRows, changeRows",
        selected,
        selectedRows,
        changeRows
      );

      setIsDisabled(selected);
      setDataDelete(selectedRows);
    },
  };

  const handleChangeSearch = React.useCallback(async ({ page, pageSize }) => {
    navigate(`/employee?page=${page}`);

    const res = await callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "GET",
      isUrlParams: true,
      key: {
        search: "",
        page,
      },
    });
    const resData = res?.data.data;
    for (let i = 0; i < resData.data.length; i++) {
      resData.data[i]["key"] = i;
    }
    dispatch(employeeAction.addListValuesTable(resData));
  }, []);

  const deleteMultiple = async () => {
    const record_ids = dataDelete?.map((item) => item.id);

    await callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "DELETE",
      isUrlParams: false,
      params: "/multiple-delete",
      data: { record_ids },
    });

    await getDetailTable();
  };

  const handleAdd = () => {
    navigate("/employee/create-or-update");
  };
  const handleDelete = () => {
    deleteMultiple();
  };

  return (
    <section>
      <div className="flex justify-between items-center pb-3  #">
        <TitleComponents title={`HR ${t("home lang.management system")}`} />

        <Search page={current_page} />
      </div>
      <div className="flex justify-end ml-1 p-3 gap-3 border-b-2 border-indigo-500 mb-3">
        <ButtonComponent
          handleCLick={handleAdd}
          icon={<FileAddOutlined />}
          textBtn={"Add"}
          style={{
            backgroundColor: "#edf6ff",
            color: "#0091ff",
          }}
        />
        <ButtonComponent
          handleCLick={handleDelete}
          disabled={isDisabled ? false : true}
          icon={<DeleteOutlined />}
          textBtn={"Delete"}
          style={{ backgroundColor: "#f1f3f5", color: "#c3c8cd" }}
        />
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        tableLayout={"auto"}
        dataSource={dataTable}
        loading={loadings}
        scroll={{ x: 120, y: 150 }}
        pagination={{
          current: current_page,
          defaultCurrent: 1,
          total: total,
          pageSize: Number(to - from + 1),
          defaultPageSize: per_page,
          showSizeChanger: false,
          onChange: (page, pageSize) => {
            handleChangeSearch({ page, pageSize });
          },
        }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              event.preventDefault();
              record.id = Number(record.id);
              dispatch(employeeAction.detailValueTable(record));
              navigate(`/employee/create-or-update/${record.id}`);
            },
          };
        }}
        style={{ cursor: "pointer", maxHeight: "525px" }}
      />
    </section>
  );
};
export default EmployeePage;
