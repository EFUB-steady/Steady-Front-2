import { atom } from "recoil";

// 로그인을 위한 입력 정보 저장
export const loginInputState = atom({
  key: "loginInputState",
  default: {
    email: "",
    password: "",
  },
});

// 로그인 여부 (true/false) 저장
export const IsLoginState = atom({
  key: "isLoginState",
  default: false,
});
