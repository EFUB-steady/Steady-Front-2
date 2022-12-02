import { atom } from "recoil";

//각 스터디 단일 조회 내용입니다, ui상 가져오지 않아도 되는 정보는 뻈습니다
export const StudyNameState = atom({
  key: "StudyNameState",
  default: {
    studyId: 0,
    name: "",
    uuid: "",
    description: "",
    account: "",
    money: 0,
    peopleCount: 0,
  },
});
