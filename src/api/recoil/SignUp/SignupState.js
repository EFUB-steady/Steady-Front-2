import { atom } from "recoil";

// 회원가입을 위한 입력 정보 저장
export const SignUpInputState = atom({
  key: "SignUpInputState",
  default: {
    name: "",
    nickname: "",
    email: "",
    password: "",
    phone: "",
  },
});
