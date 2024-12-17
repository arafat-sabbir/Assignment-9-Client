import { logOut } from "@/redux/features/auth/authSlice";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    // Retrieve token from local storage or cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      // Logout the user and redirect to sign in if unauthorized
      logOut();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const axiosInstance = instance;
