import React from "react";
import SigninArea from "../../components/SigninPage/SigninArea";
import { LeftSide, RightSide, Wrapper } from "../LoginPage/styles";

export default function SigninPage() {
  return (
    <Wrapper>
      <LeftSide>
        <SigninArea />
      </LeftSide>
      <RightSide />
    </Wrapper>
  );
}
