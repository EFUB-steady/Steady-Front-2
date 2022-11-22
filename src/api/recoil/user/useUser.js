import { useRecoilState } from "recoil";
import { userState } from "./UserState";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  return {
    user,
    setUser,
  };
};
