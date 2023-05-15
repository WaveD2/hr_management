import React, { ReactNode } from "react";
import Footer from "../../components/Home/Footer";
import "../style.css";
import logoBF from "../../assets/img/logoBF.png";

interface LayoutProps {
  children: ReactNode;
}

const LoginPage: React.FC<LayoutProps> = ({ children }) => {
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
        <h2 className="font-medium text-4xl">HR Management System</h2>
      </section>

      <section>{children}</section>

      <Footer />
    </div>
  );
};

export default LoginPage;
