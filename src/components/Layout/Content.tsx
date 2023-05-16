import React from "react";
import { Layout } from "antd";

import ButtonComponent from "../Button/Button";

const Content = ({ children }) => {
  const { Content } = Layout;

  return (
    <Content
      style={{
        boxShadow: "rgb(241, 243, 245) 0px 5px 20px",
        borderRadius: "12px",
        marginBottom: "10px",
      }}>
      <section
        className=" mt-2 rounded-md"
        style={{ backgroundColor: "rgb(251, 252, 253)" }}>
        {children}
      </section>
    </Content>
  );
};

export default Content;
