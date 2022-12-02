import { useRecoilState } from "recoil";
import { makeStudyInputState } from "./MakeStudy";

export const useMakeStudy = () => {
  const [makeStudy, setMakeStudy] = useRecoilState(makeStudyInputState);

  //스터디 정보 입력 setter
  const setName = (name) => {
    setMakeStudy((input) => ({
      ...input,
      name: name,
    }));
  };

  const setDescription = (description) => {
    setMakeStudy((input) => ({
      ...input,
      description: description,
    }));
  };

  const setMon = (mon) => {
    setMakeStudy((input) => ({
      ...input,
      mon: mon,
    }));
  };

  const setTue = (tue) => {
    setMakeStudy((input) => ({
      ...input,
      tue: tue,
    }));
  };

  const setWed = (wed) => {
    setMakeStudy((input) => ({
      ...input,
      wed: wed,
    }));
  };
  const setThu = (thu) => {
    setMakeStudy((input) => ({
      ...input,
      thu: thu,
    }));
  };
  const setFri = (fri) => {
    setMakeStudy((input) => ({
      ...input,
      fri: fri,
    }));
  };
  const setSat = (sat) => {
    setMakeStudy((input) => ({
      ...input,
      sat: sat,
    }));
  };
  const setSun = (sun) => {
    setMakeStudy((input) => ({
      ...input,
      sun: sun,
    }));
  };

  //스터디 계좌 입력 정보 setter
  const setAccount = (account) => {
    setMakeStudy((input) => ({
      ...input,
      account: account,
    }));
  };

  const setAccountBank = (accountBank) => {
    setMakeStudy((input) => ({
      ...input,
      accountBank: accountBank,
    }));
  };

  const setHour = (hour) => {
    setMakeStudy((input) => ({
      ...input,
      hour: hour,
    }));
  };

  const setMinute = (minute) => {
    setMakeStudy((input) => ({ ...input, minute: minute }));
  };

  const setMoney = (money) => {
    setMakeStudy((input) => ({
      ...input,
      money: money,
    }));
  };

  const setLateMoney = (latemoney) => {
    setMakeStudy((input) => ({
      ...input,
      latemoney: latemoney,
    }));
  };

  return {
    name: makeStudy.name,
    description: makeStudy.description,
    mon: makeStudy.mon,
    tue: makeStudy.tue,
    wed: makeStudy.wed,
    thu: makeStudy.thu,
    fri: makeStudy.fri,
    sat: makeStudy.sat,
    sun: makeStudy.sun,
    accountBank: makeStudy.accountBank,
    account: makeStudy.account,
    accountName: makeStudy.accountName,
    hour: makeStudy.hour,
    minute: makeStudy.minute,
    money: makeStudy.money,
    lateMoney: makeStudy.lateMoney,
    setName,
    setDescription,
    setMon,
    setTue,
    setWed,
    setThu,
    setFri,
    setSat,
    setSun,
    setAccountBank,
    setAccount,
    setHour,
    setMinute,
    setMoney,
    setLateMoney,
  };
};
