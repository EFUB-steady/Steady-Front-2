import React from "react";
import LoginArea from "../../components/LoginPage/LoginArea";
import { LeftSide, RightSide, Wrapper } from "./styles";

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
