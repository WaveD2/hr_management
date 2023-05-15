import React from "react";
import { Spin } from "antd";

const Loading: React.FC = () => (
  <Spin tip="Loading">
    <div className="content" />
  </Spin>
);

export default Loading;
