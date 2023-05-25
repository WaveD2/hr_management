import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FileAddOutlined, DeleteOutlined } from "@ant-design/icons";
import { IconType } from "antd/es/notification/interface";
type Button = {
  textBtn: string;
  style: CSSProperties;
  icon?: ReactNode;
  htmlType?: string | any;
  disabled?: boolean;
  handleCLick?: MouseEventHandler<HTMLAnchorElement> | any;
};
const ButtonComponent = (props: Button) => {
  return (
    <Button
      onClick={props.handleCLick}
      disabled={props.disabled}
      type="primary"
      htmlType={props.htmlType}
      className="flex items-center min-w-[90px] text-base justify-center py-2 px-3"
      style={props.style}>
      <p className="flex items-center gap-3">
        {props.icon && <span className="h-8 w-8 leading-8">{props.icon}</span>}
        {props.textBtn}
      </p>
    </Button>
  );
};

export default ButtonComponent;
