import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

export default function Penalty() {
  const [time, setTime] = useState("");
  return (
    <>
      <Column>
        <Info>벌금 규칙</Info>

        <Wrapper>
          <InfoDetail>
            지정 시간
            <Column>
              <TextField
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                size="small"
              />
            </Column>
          </InfoDetail>
          <InfoDetail>
            은행 선택
            <InputName />
          </InfoDetail>
          <InfoDetail>
            계좌 확인
            <InputName />
          </InfoDetail>
          <InfoDetail>
            지각시
            <InputName />
          </InfoDetail>
          <InfoDetail>
            결석시
            <InputName />
          </InfoDetail>
        </Wrapper>
      </Column>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.span`
  display: flex;
  font-size: 16px;
  min-width: 50%;
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
  min-width: 70%;
`;

export const InfoDetail = styled.span`
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 2%;
  width: 70%;
`;

export const InputName = styled.div`
  width: 250px;
  height: 30px;
  border: 0.5px solid #000;
  border-radius: 5px;
  margin-left: 100px;
`;
