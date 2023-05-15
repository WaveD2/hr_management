import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Select,
  Avatar,
  Space,
  Button,
} from "antd";

import ButtonComponent from "../Button/Button";

const Content = ({ children }) => {
  const { Content } = Layout;

  return (
    <Content
      style={{
        boxShadow: "rgb(241, 243, 245) 0px 5px 20px",
        borderRadius: "12px",
        marginBottom: "10px",
        padding: "12px",
      }}>
      <section
        className=" mt-2 rounded-md  "
        style={{ backgroundColor: "rgb(251, 252, 253)" }}>
        <div className="flex justify-end ml-1 p-3 gap-3 border-b-2 border-indigo-500 mb-3">
          <ButtonComponent text={"Add"} size={"small"} />
          <ButtonComponent
            text={"Delete"}
            // style={"pink" as CSSProperties}
            size={"small"}
          />
        </div>
        {children}
      </section>
    </Content>
  );
};

export default Content;
