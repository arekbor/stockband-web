import { errorToaster } from "@components/toasters";
import store from "@lib/store";
import common from "@utils/common";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: common.ApiUrls.BaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = store.getUserJWTToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    handleErrors(error);
  }
);

const handleErrors = (error: AxiosError) => {
  errorToaster(error);
};

export default api;
