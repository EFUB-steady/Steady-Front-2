import { axiosInstance, getToken } from "../utils/api";

export const AuthService = {
  getAccessToken: async (email, password) =>
    axiosInstance.post("/users/login", { email: email, password: password }),
  getUser: async (userId) =>
    axiosInstance.get(`users/${userId}`, {
      headers: { "X-AUTH-TOKEN": getToken() },
    }),
};
