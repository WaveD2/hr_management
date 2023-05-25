import Sider from "antd/es/layout/Sider";
import React from "react";
import { listMenuNavBar } from "../../constants/itemTab";

import "./style.css";
import MenuNavbar from "./MenuNavbar";

const Navbar = () => {
  const { general, advance } = listMenuNavBar;

  return (
    <Sider
      className="h-full top-19 left-0 hover:overflow-scroll"
      style={{
        position: "fixed",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "0px 5px 20px #F1F3F5",
      }}>
      <section style={{ borderBottom: "1px solid #fff" }}>
        <MenuNavbar props={general} />
      </section>
      <section>
        <MenuNavbar props={advance} />
      </section>
    </Sider>
  );
};

export default Navbar;
