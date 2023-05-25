import logoBF from "../../assets/img/logoBF.png";
import React, { ReactNode } from "react";
import Footer from "../../components/Home/Footer";
import "../style.css";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import TitleComponents from "../../components/TitleComponents";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flexColCenter m-auto "
      style={{
        backgroundColor: "#F3F3F3",
        objectFit: "cover",
        minHeight: "100vh",
      }}>
      <section className="mb-9">
        <img src={logoBF} alt="" style={{ margin: "64px auto 0" }} />
        <TitleComponents title={`HR ${t("home lang.management system")}`} />
      </section>

      <Outlet />

      <Footer />
    </div>
  );
};

export default LoginPage;
