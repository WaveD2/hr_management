import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
import callAPI from "../../services/fetchApi";
import { API_PATHS } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectorPage = useSelector((state: any) => state.employee.employeePage);

  const { Search } = Input;

  const searchParams = new URLSearchParams(location.search);
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
    const fetchApi = async (searchValue: string, page: number) => {
      await callAPI({
        baseUrl: API_PATHS.detailEmployee,
        method: "GET",
        isUrlParams: true,
        key: {
          page: page,
          search: searchValue,
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
    fetchApi(searchValue, page);
  }, [searchValue, page]);

  useEffect(() => {
    setPage(selectorPage);
  }, [selectorPage]);

  const handleChangeSearch = (e) => {
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
