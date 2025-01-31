import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { queryClient } from "../queries/client";
import { useClearCredentials, revalidateAuth } from "../utils/auth";
import { useAuthStore } from "../store/useAuthStore";

const api = axios.create({
  baseURL: process.env.REACT_APP_API ?? "https://api.sensormagics.com",
});

api.defaults.headers.post["Content-Type"] = "application/json";

api.interceptors.request.use((config) => {
  const id = useAuthStore.getState().id || "";
  const accesstoken =
    localStorage.getItem("accesstoken") || useAuthStore.getState().accessToken;
  revalidateAuth();
  if (accesstoken && !config.url?.endsWith("/login")) {
    (config.headers as AxiosRequestHeaders).AccessToken = accesstoken;
    (config.headers as AxiosRequestHeaders).id = id;
  }
  if (config.url === "exit") {
    delete (config.headers as AxiosRequestHeaders).AccessToken;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    if (res.status === 401) {
      useClearCredentials();
      queryClient.clear();
      useAuthStore.setState((store: any) => ({
        ...store,
        isAuthenticated: false,
      }));
      window.location.href = process.env.REACT_APP_FRONT + "/login";
      return Promise.reject(res);
    }
    return res;
  },
  (error: AxiosError) => {

    if (error?.status === 401) {
      queryClient.clear();
      useAuthStore.setState((store: any) => ({
        ...store,
        isAuthenticated: false,
      }));
    }
    return Promise.reject(error);
  }
);

export default api;
