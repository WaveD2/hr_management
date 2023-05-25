/* eslint-disable no-unused-vars */
import React, { useEffect, Event, useCallback, useState } from "react";
import { Input } from "antd";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../../constants/validate";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
import callAPI from "../../services/fetchApi";
import { API_PATHS } from "../../services/api";
import { useNavigate } from "react-router";
import { useSearchParams, useParams } from "react-router-dom";

interface IPage {
  page: string;
}

const Search = ({ page }: IPage) => {
  const navigate = useNavigate();

  const [pages, setPage] = useSearchParams("1");

  useEffect(() => {
    setPage(page);
  }, [page]);

  const { Search } = Input;
  const dispatch = useDispatch();
  const handleChangeSearch = React.useCallback(async (e: Event) => {
    const keySearch = e.target.value;
    console.log("pages", pages);

    navigate(`?search=${keySearch}&page=${pages}`);
    callAPI({
      baseUrl: API_PATHS.detailEmployee,
      method: "GET",
      isUrlParams: true,
      key: {
        search: keySearch,
        page: pages,
      },
    })
      .then((response: AxiosResponse) => {
        const dataResult = response?.data.data;
        console.log("dataResult", response);

        dispatch(employeeAction.addListValuesTable(dataResult));
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return (
    <Search
      placeholder="Search..."
      style={{ width: 200 }}
      onChange={handleChangeSearch}
    />
  );
};

export default Search;
