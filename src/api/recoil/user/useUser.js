import { useRecoilState } from "recoil";
import { userState } from "./UserState";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const setName = (name) => {
    setUser((input) => ({
      ...input,
      name: name,
    }));
  };
  const setNickname = (nickname) => {
    setUser((input) => ({
      ...input,
      nickname: nickname,
    }));
  };

  const setEmail = (email) => {
    setUser((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setUser((input) => ({
      ...input,
      password: password,
    }));
  };

  return {
    user,
    setUser,
    setNickname,
    setEmail,
    setPassword,
  };
};
