import { useRecoilState } from "recoil";
import { IsLoginState, loginInputState } from "./AuthState";

// 로그인을 위한 입력 시 활용
export default function useLoginInput() {
  const [loginInput, setLoginInput] = useRecoilState(loginInputState);

  const setEmail = (email) => {
    setLoginInput((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setLoginInput((input) => ({
      ...input,
      password: password,
    }));
  };

  const loginReset = () => {
    setLoginInput({
      email: "",
      password: "",
    });
  };

  return {
    email: loginInput.email,
    password: loginInput.password,
    setEmail,
    setPassword,
    loginReset,
  };
}

// 로그인 여부 (true/false) 저장 시 활용
export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useRecoilState(IsLoginState);

  return {
    isLogin,
    setIsLogin,
  };
};
