import { Menu } from "antd";

import React from "react";

type IMenuNavBar = {
  title: string;
  itemNavBar: [];
};

const MenuNavbar = ({ props }) => {
  const { Item } = Menu;

  return (
    <Menu style={{ padding: "24px" }} defaultOpenKeys={["3"]}>
      <h4
        style={{
          fontSize: "24px",
          lineHeight: 1.375,
          color: "rgb(0, 106, 220)",
          textTransform: "capitalize",
          fontWeight: "500",
        }}>
        {props.title}
      </h4>
      {props.itemNavBar?.map((itemNavBar, index) => (
        <Item
          defaultChecked
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 10px",
            margin: "10px 0 0 ",
            userSelect: "none",
            verticalAlign: "middle",
            cursor: "pointer",
            height: "52px",
          }}
          key={index}
          icon={
            <img
              src={itemNavBar.icon}
              alt="menu navbar"
              style={{
                width: "42px",
                height: "42px",
                objectFit: "cover",
              }}
            />
          }>
          <span
            style={{ fontSize: "16px", fontWeight: "400", lineHeight: 1.5 }}>
            {itemNavBar.text}
          </span>
        </Item>
      ))}
    </Menu>
  );
};

export default MenuNavbar;
