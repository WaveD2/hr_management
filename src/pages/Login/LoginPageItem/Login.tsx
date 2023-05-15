import React from "react";
import HandleLogin from "../../../components/HandleLogin";
import Help from "../../../components/Help";
const Login = () => {
  return (
    <section>
      <h3 className="text-4xl mb-5 font-medium text-center">Sign In</h3>
      <div className="formLogin">
        <HandleLogin />
        <Help text="Forgot Your Password?" href="forgot-password" />
      </div>
    </section>
  );
};

export default Login;
