import React, { useEffect, Event, useCallback } from "react";
import { Input } from "antd";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../../constants/validate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";

const Search: React.FC = () => {
  const { Search } = Input;
  const dispatch = useDispatch();

  const onSearch = async (e: Event) => {
    console.log("e.target.defaultValue", e.target.defaultValue);

    const response = await axios({
      method: "GET",
      url: `https://api.hrm.div4.pgtest.co/api/v1/employee?search=${e.target.defaultValue}&page=1`,
      headers: {
        authorization: `Bearer  ${Cookies.get(ACCESS_TOKEN_KEY)}` || "",
        cache: "no-store",
      },
    });
    if (response.status === 200 && response.data.message === "Success") {
      const dataResult = response?.data.data.data;
      dispatch(employeeAction.addListValuesTable(dataResult));
    } else {
      alert("Error");
    }
  };
  useCallback(() => {
    onSearch();
  }, []);

  return (
    <Search
      placeholder="Search..."
      style={{ width: 200 }}
      onChange={onSearch}
    />
  );
};

export default Search;
