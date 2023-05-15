import React from "react";
import HandleForgotPassword from "../../../components/HandleForgotPassword";
import Help from "../../../components/Help";

const ForgotPassword = () => {
  return (
    <section>
      <h3 className="text-4xl mb-5 font-medium text-center">Forgot password</h3>
      <div className="formLogin">
        <HandleForgotPassword />
        <Help text="Back to Sign In" href="login" />
      </div>
    </section>
  );
};

export default ForgotPassword;
