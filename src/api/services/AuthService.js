import { axiosInstance } from "../utils/api";

export const AuthService = {
  getAccessToken: () => axiosInstance.get("/users/login"),
};
