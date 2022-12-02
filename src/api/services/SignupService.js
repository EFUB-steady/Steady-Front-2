import { axiosInstance } from "../utils/api";

export const SignupService = {
  getAccessToken: async (name, nickname, email, password, phone) =>
    axiosInstance.post("/users/signup", {
      name: name,
      nickname: nickname,
      email: email,
      password: password,
      phone: phone,
    }),
};
