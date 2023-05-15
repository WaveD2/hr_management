import React, { CSSProperties } from "react";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FileAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { IconType } from "antd/es/notification/interface";
type Button = {
  textBtn: string;
  style: CSSProperties;
  icon?: IconType;
  htmlType?: string;
};
const ButtonComponent = (props: Button) => {
  return (
    <Button
      type="primary"
      htmlType={props.htmlType}
      className="flex items-center min-w-[90px] text-base justify-center"
      style={props.style}>
      <span>{props.icon}</span>
      {props.textBtn}
    </Button>
  );
};

export default ButtonComponent;
