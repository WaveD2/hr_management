import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const Search: React.FC = () => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);
  return (
    <Search
      placeholder="Search..."
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};

export default Search;
