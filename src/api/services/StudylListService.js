import { axiosInstance, getToken } from "../utils/api";

export const StudyListService = {
  getStudy: async () =>
    axiosInstance.get("/studies/my-study", {
      headers: { "X-AUTH-TOKEN": getToken() },
    }),
};
