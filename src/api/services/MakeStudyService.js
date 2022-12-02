import { axiosInstance } from "../utils/api";

export const MakeStudyService = {
  getAccessToken: async (name, summary) =>
    axiosInstance.post("/studies", { name: name, summary: summary }),
};
