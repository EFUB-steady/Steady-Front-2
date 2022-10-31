import React from "react";
import SignupInput from "../SignupInput";
import logo from "../../../assets/LogoHorizontal.png";
import SignupBtn from "../../buttons/SignupBtn";
import styled from "styled-components";

export default function SignupArea() {
  return (
    <Column>
      <LogoImg src={logo} />
      <SignupInput />
      <SignupBtn />
    </Column>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  height: 48px;
  width: 250px;
`;
