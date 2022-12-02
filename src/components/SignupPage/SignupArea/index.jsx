import React from "react";
import SignupInput from "../SignupInput";
import logo from "../../../assets/LogoHorizontal.png";
import SignupBtn from "../../buttons/SignupBtn";
import styled from "styled-components";

export default function SignupArea() {
  return (
    <Column>
      <LogoImg src={logo} />
      <Wrapper>
        <SignupInput />
        <SignupBtn />
      </Wrapper>
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const LogoImg = styled.img`
  height: 48px;
  width: 250px;
`;
