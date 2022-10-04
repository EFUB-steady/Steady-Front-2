import React from "react";
import LoginBtn from "../../components/buttons/LoginBtn";
import LoginArea from "../../components/LoginPage/LoginArea";
import { LeftSide, LogoImg, RightSide, Wrapper } from "./styles";
export default function LoginPage() {
  return (
    <Wrapper>
      <LeftSide>
        <LoginArea />
      </LeftSide>
      <RightSide />
    </Wrapper>
  );
}
