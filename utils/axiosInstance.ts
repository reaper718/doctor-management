import axios from "axios";

const BASE_URL = "https://doctor-management-backend-five.vercel.app//api/v1";
// const BASE_URL = "http://localhost:5003/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("dmToken");

      if (token) {
        config.headers["Authorization"] = `${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
