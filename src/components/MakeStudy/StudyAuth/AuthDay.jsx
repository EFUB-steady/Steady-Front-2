import React from "react";
import styled from "styled-components";

export default function AuthDay() {
  const DayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const DayMap = DayList.map((DayList) => <DaySelect>{DayList}</DaySelect>);
  return (
    <Wrapper>
      <Info>인증 요일</Info>
      {DayMap}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
`;

export const Info = styled.span`
  margin-right: 30px;
`;

export const DaySelect = styled.div``;
