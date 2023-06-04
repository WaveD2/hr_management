import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
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

interface ICol {
  title: string;
  dataIndex: string;
  width: 100;
}

const EmployeePage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loadings, setLoadings] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [columns, setColumns] = useState<any>();
  const [dataTable, setDataTable] = useState<any>([]);
  const [dataDelete, setDataDelete] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selector = useSelector(
    (state: any) => state.employee.employeeListValueTable
  );
  const { current_page, data, last_page, from, per_page, total, to } = selector;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getDetailTable = async () => {
    setLoadings(true);
    await callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "GET",
      isUrlParams: true,
    })
      .then((res) => {
        const cols: ICol[] = [];
        const resData = res?.data.data;
        const dataCol = convertColumTable(resData.data) || {};

        for (const key in dataCol[0]) {
          let newKey = key.replace(/_/g, " ").replace("_id", "");
          newKey = newKey.replace(/\b\w/g, (c) => c.toUpperCase());
          const col: ICol = {
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
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    onSelect: (record, selected, selectedRows) => {
      setIsDisabled(selected);
      setDataDelete(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setIsDisabled(selected);
      setDataDelete(selectedRows);
    },
  };

  const handleChangeSearch = React.useCallback(async ({ page, pageSize }) => {
    if (current_page === 1 && last_page === 1) {
      dispatch(employeeAction.editEmployeePage(1));
    } else {
      dispatch(employeeAction.editEmployeePage(page));
    }
  }, []);

  const deleteMultiple = async () => {
    const record_ids = dataDelete?.map((item: any) => item.id);

    await callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "DELETE",
      isUrlParams: false,
      params: "/multiple-delete",
      data: { record_ids },
    });

    await getDetailTable();
    setSelectedRowKeys([]);
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    navigate("/employee/create-or-update");
  };
  const handleDelete = () => {
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="flex justify-between items-center pb-3  #">
        <TitleComponents title={`HR ${t("home lang.management system")}`} />

        <Search />
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
        bordered
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
            setSelectedRowKeys([]);
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

      <Modal
        centered
        style={{ fontSize: "24px" }}
        title="Do you have delete user?"
        open={isModalOpen}
        cancelText={"No"}
        okText={"Ok"}
        onOk={deleteMultiple}
        onCancel={() => setIsModalOpen(false)}
      />
    </section>
  );
};
export default EmployeePage;
