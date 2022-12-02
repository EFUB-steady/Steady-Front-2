import React from "react";
import styled from "styled-components";
import { useMakeStudy } from "../../../api/recoil/MakeStudy/useMakeStudy";
import { ewhaGreen } from "../../../styles/colors";

export default function AuthDay() {
  const {
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
    setMon,
    setTue,
    setWed,
    setThu,
    setFri,
    setSat,
    setSun,
  } = useMakeStudy();

  const DAYS = [
    {
      day: "Sun",
      isClicked: sun,
      onClick: () => {
        setSun(!sun);
      },
    },
    {
      day: "Mon",
      isClicked: mon,
      onClick: () => {
        console.log("mon");
        setMon(!mon);
      },
    },
    {
      day: "Tue",
      isClicked: tue,
      onClick: () => {
        console.log("tue");
        setTue(!tue);
      },
    },
    {
      day: "Wed",
      isClicked: wed,
      onClick: () => {
        console.log("wed");
        setWed(!wed);
      },
    },
    {
      day: "Thu",
      isClicked: thu,
      onClick: () => {
        console.log("thu");
        setThu(!thu);
      },
    },
    {
      day: "Fri",
      isClicked: fri,
      onClick: () => {
        console.log("fri");
        setFri(!fri);
      },
    },
    {
      day: "Sat",
      isClicked: sat,
      onClick: () => {
        console.log("sat");
        setSat(!sat);
      },
    },
  ];

  return (
    <Wrapper>
      <Info>인증 요일</Info>
      {DAYS.map((day) => (
        <DaySelect
          key={day.day}
          isClicked={day.isClicked}
          onClick={day.onClick}
        >
          {day.day}
        </DaySelect>
      ))}
    </Wrapper>
  );
}

export const DaySelect = styled.div`
  margin-right: 7%;
  &:hover {
    background-color: ${ewhaGreen};
    color: white;
    cursor: pointer;
  }
`;

export const DayRow = styled.div`
  display: flex;
  min-width: 90%;
`;

export const Info = styled.div`
  display:flex;
  margin-right: 50px;
  font-size: 16px;
  min-width: 18%;
`;

export const DaySelect = styled.div`
  width: 50px;
  text-align: center;
  margin: 0 10px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: ${(props) => props.isClicked && ewhaGreen};
  color: ${(props) => props.isClicked && "white"};

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  min-width: 80%;
`;
