import React from "react";
import styled from "styled-components";

export default function StudyName() {
  return (
    <Wrapper>
      <Info>스터디 이름</Info>
      <InputName />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

export const Info = styled.span`
  margin-right: 70px;
`;

export const InputName = styled.div`
  width: 650px;
  height: 30px;
  border: 0.5px solid #000;
  border-radius: 5px;
`;