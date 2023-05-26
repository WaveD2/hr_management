import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { statusAction } from "../redux/ReducerStatus/reducerStatus";
import callAPI from "../services/fetchApi";
import { API_PATHS } from "../services/api";

interface IModal {
  title: string;
  handleOk?: Function;
}

const ModalComponent = (props: IModal) => {
  const isModal = useSelector((state: any) => state.status.isModal);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isModal);
  }, [isModal]);

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(statusAction.isModal(false));
  };

  return (
    <Modal
      centered
      style={{ fontSize: "24px" }}
      title={props.title}
      open={isModalOpen}
      cancelText={"No"}
      okText={"Ok"}
      onOk={props.handleOk}
      onCancel={handleCancel}></Modal>
  );
};

export default ModalComponent;
