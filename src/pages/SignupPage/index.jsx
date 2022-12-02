import React from "react";
import SignupArea from "../../components/SignupPage/SignupArea";
import { Wrapper } from "../LoginPage/styles";
import Container from "./../../components/common/Container/index";

export default function SignupPage() {
  return (
    <Container>
      <Wrapper>
        <SignupArea />
      </Wrapper>
    </Container>
  );
}
