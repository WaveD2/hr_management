import { APIUrl } from "../constants/validate";

enum APIService {
  auth,
  employee,
  public,
}

function getBaseUrl(service: APIService) {
  if (service === APIService.auth) {
    return `${APIUrl}login`;
  } else if (service === APIService.employee) {
    return `${APIUrl}employee`;
  } else if (service === APIService.public) {
    return `${APIUrl}`;
  }

  return "";
}

export const API_PATHS = {
  signIn: `${getBaseUrl(APIService.auth)}`,
  detailEmployee: `${getBaseUrl(APIService.employee)}`,
  defaultAPI: `${getBaseUrl(APIService.public)}`,
};
