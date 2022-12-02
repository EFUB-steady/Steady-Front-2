import { atom } from "recoil";

export const StudylistState = atom({
  key: "StudylistState",
  default: {
    userId: 0,
    studyId: 0,
    leader: false,
    score: 0,
    lastFine: 0,
    nowFine: 0,
    color: "",
  },
});
