import { axiosInstanceHeader } from "../../core/axios";
import { useUser } from "./useUser";

export const useUserAPI = ({ onSuccess, onFail }) => {
  const userId = 1;
  const { setUser } = useUser();

  const userAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(`users/${userId}`);
      if (data) {
        onSuccess && onSuccess();
        setUser(data);
      }
    } catch (error) {
      onFail && onFail();
    }
  };

  return { userAPI };
};
