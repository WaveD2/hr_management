import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../constants/validate";
type ICallAPI = {
  method: string;
  data?: any;
  params: string;
};

async function callAPI(props: ICallAPI): Promise<AxiosResponse> {
  console.log("props", props);

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios({
      method: props.method,
      url: `https://api.hrm.div4.pgtest.co/api/v1/${props.params}`,
      data: props?.data,
      headers: {
        authorization: `Bearer  ${Cookies.get(ACCESS_TOKEN_KEY)}` || "",
        cache: "no-store",
      },
    });
    console.log("response api", response);

    return response;
  } catch (error) {
    // Xử lý lỗi tại đây
    throw error;
  }
}

export default callAPI;
