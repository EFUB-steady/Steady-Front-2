import React, { useState } from "react";
import styled from "styled-components";

export default function Penalty() {
  return (
    <>
    <Info>벌금 규칙</Info>
    <Wrapper>
      <InfoDetail>지정 시간 <InputName /></InfoDetail>
      <InfoDetail>은행 선택<InputName /></InfoDetail>
      <InfoDetail>계좌 확인<InputName /></InfoDetail>
      <InfoDetail>지각시<InputName /></InfoDetail>
      <InfoDetail>결석시<InputName /></InfoDetail>
    </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;

export const Info = styled.span`
  margin-right: 30px;
`;

export const InfoDetail = styled.div`
margin-bottom: 15px;
`;

export const InputName = styled.div`
width: 250px;
height: 30px;
border: 0.5px solid #000;
border-radius: 5px;
margin-left: 100px;
`;