import { atom } from "recoil";

//회원별 가입한 스터디 리스트 조회입니다.
export const StudyListState = atom({
  key: "StudyListState",
  default: {
    studyId: 0,
    name: "",
    leader: false,
    score: 0,
    lastFine: 0,
    nowFine: 0,
  },
});
