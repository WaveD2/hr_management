import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

type IHelp = {
  text: string;
  href: string;
};

const Help = (prop: IHelp) => {
  const navigate = useNavigate();
  const handleHelp = (e) => {
    e.preventDefault();
    navigate(`/${prop.href}`);
  };
  return (
    <div className="help mt-2 mb-4">
      <div onClick={handleHelp}>{prop.text}</div>
    </div>
  );
};
export default Help;
