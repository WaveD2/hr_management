import React, { ReactNode, useMemo } from "react";
import { Button, Divider, notification, Space } from "antd";
const Context = React.createContext({ name: "Default" });
import { WarningOutlined, CheckCircleOutlined } from "@ant-design/icons";

type IProps = {
  icon?: ReactNode;
  text: string;
  type: string;
};

const Notification = (props: IProps) => {
  console.log(props.text);

  notification.config({
    placement: "topRight",
    top: 50,
    duration: 3,
    rtl: true,
  });
  return notification.success({
    style: {
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      fontWeight: "600",
      lineHeight: 1.57143,
      fontSize: "14px",
      flex: ": 1 1 0%",
      backgroundColor: "pink",
      color: "rgb(229, 72, 77)",
    },
    icon:
      props.type === "error" ? <WarningOutlined /> : <CheckCircleOutlined />,
    message: props.text,
  });
};

export default Notification;
