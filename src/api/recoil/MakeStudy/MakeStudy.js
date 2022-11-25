import { atom } from "recoil";

//스터디를 위한 입력 정보 저장
export const makeStudyInputState = atom({
  key: "makeStudyInputState",
  default: {
    name: "",
    description: "",
    mon: false,
    tue: false,
    wed: false,
    the: false,
    fri: false,
    sat: false,
    sun: false,
    accountBank: "",
    account: "",
    accountName: "",
    hour: 0,
    minute: 0,
    money: 0,
    lateMoney: 0,
  },
});
