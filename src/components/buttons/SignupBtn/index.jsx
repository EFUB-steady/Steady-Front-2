import React from "react";
import styled from "styled-components";
import { ewhaGreen, gray400 } from "../../../styles/colors";

export default function SignupBtn() {
  return <Wrapper>회원가입</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  display: flex;
  height: 40px;
  width: 100%;
  color: white;
  background-color: ${ewhaGreen};
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 4px ${gray400};
  margin: 10px 0;
`;
