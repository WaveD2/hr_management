import { Breadcrumb, Layout } from "antd";
import React, { ReactNode } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import Title from "../Title";
import Search from "../Button/Search";
import Header from "../Home/Header";
import Content from "./Content";

interface LayoutProps {
  children: ReactNode;
}

const LayoutHome: React.FC<LayoutProps> = ({ children }) => {
  console.log("LayoutHome, ");

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
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>General</Breadcrumb.Item>
              <Breadcrumb.Item>Employee Management</Breadcrumb.Item>
            </Breadcrumb>

            <div className="flex justify-between items-center pb-3  #">
              <Title title={"HR Management System"} />
              <Search />
            </div>

            <Content children={children} />
          </div>

          <Footer />
        </section>
      </div>
    </Layout>
  );
};

export default LayoutHome;
