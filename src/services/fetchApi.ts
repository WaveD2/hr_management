import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../constants/validate";
type ICallAPI = {
  method: string;
  data?: Object;
  params?: string;
  key?: object;
  page?: string;
  baseUrl: string;
  isUrlParams: boolean;
};

async function callAPI(props: ICallAPI) {
  const { baseUrl, method, data, params, key, isUrlParams } = props;
  const url = isUrlParams ? baseUrl : `${baseUrl}${params}`;
  try {
    const response = await axios({
      url,
      method,
      data,
      params: { ...key },
      headers: {
        authorization: `Bearer  ${Cookies.get(ACCESS_TOKEN_KEY)}` || "",
        cache: "no-store",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default callAPI;
