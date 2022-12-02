import { useRecoilState } from "recoil";
import { SignUpInputState } from "./SignupState";

// 회원가입을 위한 입력 시 활용
export default function useSignupInput() {
  const [signupInput, setsignupInput] = useRecoilState(SignUpInputState);

  const setName = (name) => {
    setsignupInput((input) => ({
      ...input,
      name: name,
    }));
  };

  const setNickname = (nickname) => {
    setsignupInput((input) => ({
      ...input,
      nickname: nickname,
    }));
  };

  const setEmail = (email) => {
    setsignupInput((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setsignupInput((input) => ({
      ...input,
      password: password,
    }));
  };

  const setPhone = (phone) => {
    setsignupInput((input) => ({
      ...input,
      phone: phone,
    }));
  };

  return {
    name: signupInput.name,
    nickname: signupInput.nickname,
    email: signupInput.email,
    password: signupInput.password,
    phone: signupInput.phone,
    setName,
    setNickname,
    setEmail,
    setPassword,
    setPhone,
  };
}
