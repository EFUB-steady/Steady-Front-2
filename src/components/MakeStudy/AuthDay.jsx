import React from "react";
import styled from "styled-components";
import { ewhaGreen } from "../../styles/colors";

export default function AuthDay() {
  return (
    <>
      <Row>
        <Info>인증 요일</Info>
        <DayRow>
          <DaySelect>SUN </DaySelect>
          <DaySelect>MON</DaySelect>
          <DaySelect>TUE</DaySelect>
          <DaySelect>WED</DaySelect>
          <DaySelect>THU</DaySelect>
          <DaySelect>FRI</DaySelect>
          <DaySelect>SAT</DaySelect>
        </DayRow>
      </Row>
    </>
  );
}

export const DaySelect = styled.div`
  margin-right: 7%;
  &:hover {
    background-color: ${ewhaGreen};
    color: white;
    cursor: pointer;
  }

  &:active {
    background-color: ${ewhaGreen};
    color: white;
    cursor: pointer;
  }
`;

export const DayRow = styled.div`
  display: flex;
  min-width: 90%;
`;

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

export const Info = styled.span`
  display: flex;
  font-size: 16px;
  min-width: 18%;
`;
