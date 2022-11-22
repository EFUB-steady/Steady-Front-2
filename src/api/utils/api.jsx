import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../constants/config";

export const getToken = () => {
  var token = localStorage.getItem(ACCESS_TOKEN);
  return token;
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
