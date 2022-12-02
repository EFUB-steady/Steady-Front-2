import { axiosInstance, getToken } from "../utils/api";

export const StudyNameService = {
  getStudy: async (studyId) =>
    axiosInstance.get(`{/studies/${studyId}`, {
      headers: { "X-AUTH-TOKEN": getToken() },
    }),
  getList: async () =>
    axiosInstance.get("/studies/my-study", {
      headers: { "X-AUTH-TOKEN": getToken() },
    }),
};
