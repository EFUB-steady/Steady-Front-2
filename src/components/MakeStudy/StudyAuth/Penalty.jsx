import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

export default function Penalty() {
  const [hour, setHour] = useState("");
  const [accountBank, setAccountBank] = useState("");
  const [account, setAccount] = useState("");
  const [money, setMoney] = useState("");
  const [latemoney, setLatemoney] = useState("");
  return (
    <>
      {/* <Column> */}
      <Info>벌금 규칙</Info>

      <Wrapper>
        <InfoDetail>
          지정 시간
          {/* <Column> */}
          <TextField
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
            size="small"
            placeholder="숫자로 적어주세요(시)"
            style={{ padding: "0px 7%" }}
          />
          <TextField
            value={hour}
            onChange={(e) => {
              setHour(e.target.value);
            }}
            size="small"
            placeholder="숫자로 적어주세요(분)"
          />
          {/* </Column> */}
        </InfoDetail>
        <InfoDetail>
          은행 선택
          <Column>
            <FormControl fullWidth>
              <Select
                id="accountBank"
                value={accountBank}
                onChange={(event) => setAccountBank(event.target.value)}
                size="small"
                fullWidth
              >
                <MenuItem value={10}>신한 은행</MenuItem>
                <MenuItem value={20}>농협 은행</MenuItem>
                <MenuItem value={30}>우리 은행</MenuItem>
                <MenuItem value={40}>국민 은행</MenuItem>
                <MenuItem value={50}>카카오뱅크</MenuItem>
              </Select>
            </FormControl>
          </Column>
        </InfoDetail>
        <InfoDetail>
          계좌 확인
          <Column>
            <TextField
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
              size="small"
            />
          </Column>
        </InfoDetail>
        <InfoDetail>
          지각시
          <Column style={{ paddingLeft: "10%" }}>
            <TextField
              value={latemoney}
              onChange={(e) => {
                setLatemoney(e.target.value);
              }}
              size="small"
            />
          </Column>
        </InfoDetail>
        <InfoDetail>
          결석시
          <Column style={{ paddingLeft: "10%" }}>
            <TextField
              value={money}
              onChange={(e) => {
                setMoney(e.target.value);
              }}
              size="small"
            />
          </Column>
        </InfoDetail>
      </Wrapper>
      {/* </Column> */}
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
`;

export const Info = styled.span`
  display: flex;
  font-size: 16px;
  min-width: 20%;
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
  padding-left: 7%;
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
