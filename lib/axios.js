import axios from "axios";
import Cookies from "js-cookie";
import { isServer } from "../utils";

const axiosInstance = axios.create({
  baseURL: isServer() && process.env.NEXT_PUBLIC_API_URL
});

axiosInstance.interceptors.request.use((config) => {
  if (!isServer()) {
    const jwt = Cookies.get("jwt-token");

    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${jwt}`;
  }

  return config;
});

axiosInstance.interceptors.response.use((response) => {
  if (!isServer()) {
    const jwt = response.headers["jwt-token"];

    if (jwt) {
      Cookies.set("jwt-token", jwt, { expires: 14, domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
    }
  }

  return response;
});

export default axiosInstance;
