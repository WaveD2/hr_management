import { Breadcrumb, Button, Layout } from "antd";
import React, { ReactNode, useState } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import Search from "../Button/Search";
import Header from "../Home/Header";
import Content from "./Content";
import ButtonComponent from "../Button/Button";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import TitleComponents from "../TitleComponents";
import { useSelector } from "react-redux";

const LayoutHome = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((item) => item);

  const deletePathNameFinal = pathnames.pop(); // element path delete

  function getTitle(href: string): string {
    if (href === "employee") {
      return "Employee Management";
    } else if (href === "create-or-update") {
      return "Edit employee";
    } else {
      return "";
    }
  }
  const listPathNames = pathnames.map((item) => {
    const newObj = {
      href: item,
      title: getTitle(item),
    };
    return newObj;
  });

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "1 1 0%",
        overflow: "hidden",
      }}>
      <section>
        <Header />
      </section>

      <div className="flex  w-full ">
        <div
          style={{
            flex: "0 0 auto",
            width: "329px",
          }}>
          <Navbar />
        </div>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 0%",
            overflow: "hidden",
            color: "#11181c",
            lineHeight: 1.5,
            fontSize: "16px",
            letterSpacing: "-0.01em",
            fontWeight: 400,
            backgroundColor: " rgb(240, 240, 240)",
          }}>
          <div
            style={{
              margin: "30px 46px 0px",
              maxWidth: "1170px",
              flex: "1 1 0%",
            }}>
            <Breadcrumb separator=">">
              {listPathNames.length > 0 ? (
                <Breadcrumb.Item>General</Breadcrumb.Item>
              ) : (
                <>
                  <Breadcrumb.Item>General</Breadcrumb.Item>
                  <Breadcrumb.Item>Employee Management</Breadcrumb.Item>
                </>
              )}
              {listPathNames?.map((item, index) => {
                const isLast = index === listPathNames.length;
                return isLast ? (
                  <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item className="text-[#e92c2c]">
                    <Link to={`${item.href}`}>{item.title}</Link>
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>

            <Outlet />
          </div>

          <Footer />
        </section>
      </div>
    </Layout>
  );
};

export default LayoutHome;
