import { axiosInstance } from "../utils/api";

export const AuthService = {
  getToken: () => axiosInstance.get("/users/login"),
};
