import React from "react";
import styled from "styled-components";
import { ewhaGreen } from "../../styles/colors";

export const Bold = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  width: 155px;
  height: 42px;
  display: flex;
  align-items: center;
  margin-left: 45px;
  margin-top: 45px;
`;

export const Button = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  background: ${ewhaGreen};
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
  margin-left: 1090px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-left: 200px;
`;

export const DivideLine = styled.hr`
  width: 1190px;
  color: #d9d9d9;
`;
