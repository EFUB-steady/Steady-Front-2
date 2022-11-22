import { getAccessToken } from "../utils/api";

export const AuthService = {
  getAccessToken: async (email, password) =>
    getAccessToken.post("/users/login", { email: email, password: password }),
};
