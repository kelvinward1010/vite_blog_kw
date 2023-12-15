import axios from "axios";
import { BASE_URL } from "../constant/config";
import storage from "../utils/storage";


export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 60 * 30 * 2, // 60 minutes,
})

apiClient.interceptors.request.use(
    function (config) {
      config.headers.Authorization = "Bearer " + storage.getToken();
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
);