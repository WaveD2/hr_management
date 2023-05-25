import React from "react";
import HandleForgotPassword from "../../../components/HandleForgotPassword";
import Help from "../../../components/Help";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section>
      <h3 className="text-4xl mb-5 font-medium text-center">
        {t("home lang.forgot pass")}
      </h3>
      <div className="formLogin">
        <HandleForgotPassword />
        <Help text={t("home lang.back sign in")} href="auth/login" />
      </div>
    </section>
  );
};

export default ForgotPassword;
