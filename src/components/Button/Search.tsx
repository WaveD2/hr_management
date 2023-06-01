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
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

interface IPage {
  page: string;
}

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { Search } = Input;

  console.log("location", location);

  const searchParams = new URLSearchParams(location.search);
  console.log("searchParams", searchParams);
  console.log("/", searchParams.get("page"));
  const [page, setPage] = useState(parseInt(searchParams.get("page") || "1"));
  const [prevPage, setPrevPage] = useState(
    parseInt(searchParams.get("page") || "1")
  );
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [prevSearchValue, setPrevSearchValue] = useState(
    searchParams.get("search") || ""
  );
  useEffect(() => {
    setPage(page);
  }, [page]);

  useEffect(() => {
    const fetchApi = async () => {
      await callAPI({
        baseUrl: API_PATHS.detailEmployee,
        method: "GET",
        isUrlParams: true,
        key: {
          search: searchValue,
          page: page,
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
    };
    fetchApi();
  }, [searchValue, page]);

  const handleChangeSearch = (e: Event) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      searchParams.set("search", searchValue);
      navigate(`?${searchParams.toString()}`);
      setPrevSearchValue(searchValue);
    }
  }, [searchValue, navigate, searchParams, prevSearchValue]);

  useEffect(() => {
    if (page !== prevPage) {
      searchParams.set("page", page.toString());
      navigate(`?${searchParams.toString()}`);
      setPrevPage(page);
    }
  }, [page, navigate, searchParams, prevPage]);

  return (
    <Search
      placeholder="Search..."
      style={{ width: 200 }}
      onChange={handleChangeSearch}
    />
  );
};

export default Search;
