import React from "react";
import HandleLogin from "../../../components/HandleLogin";
import Help from "../../../components/Help";
import TitleComponents from "../../../components/TitleComponents";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section>
      <TitleComponents title={t("home lang.login")} />
      <div className="formLogin">
        <HandleLogin />
        <Help text={t("home lang.forgot pass")} href="auth/forgot-password" />
      </div>
    </section>
  );
};

export default Login;
