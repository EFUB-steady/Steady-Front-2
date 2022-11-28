import React from "react";
import { Wrapper, InputWrapper } from "./styles";
import Container from "../../components/common/Container";
import Header from "../../components/MemberMain/Header";
import SignupInput from "../../components/SignupPage/SignupInput";

export default function ModifyInfoPage() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <InputWrapper>
          <SignupInput />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
}
