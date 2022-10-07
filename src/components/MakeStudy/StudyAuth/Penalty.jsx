import React, { useState } from "react";
import styled from "styled-components";

export default function Penalty() {

  return (
    <Wrapper>
      <Info>벌금 규칙</Info>
      <InfoDetail>지정 시간 </InfoDetail>
      <InfoDetail>은행 선택</InfoDetail>
      <InfoDetail>계좌 확인</InfoDetail>
      <InfoDetail>지각시</InfoDetail>
      <InfoDetail>결석시</InfoDetail>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.span`
  margin-right: 30px;
`;

export const InfoDetail = styled.div``;
