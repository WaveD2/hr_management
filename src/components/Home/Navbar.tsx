import Sider from "antd/es/layout/Sider";
import React from "react";
import { listMenuNavBar } from "../../constants/itemNavbar";

import "./style.css";
import MenuNavbar from "./MenuNavbar";

const Navbar = () => {
  const { general, advance } = listMenuNavBar;

  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        top: "70px",
        left: 0,
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "0px 5px 20px #F1F3F5",
      }}>
      <section style={{ borderBottom: "1px solid #fff" }}>
        <MenuNavbar props={general} />
      </section>
      <MenuNavbar props={advance} />
    </Sider>
  );
};

export default Navbar;
