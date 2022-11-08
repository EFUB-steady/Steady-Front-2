import { SignBox, Wrapper, ContentWrapper, ExBtnWrapper } from "./styles";
import { Bold, Body1 } from "../../../styles/text";

import React from "react";
import ModifyBtn from "./../../buttons/ModifyBtn";

export default function MyInfo() {
  return (
    <Wrapper>
      <ExBtnWrapper>
        <Bold>내 정보</Bold>
        <ContentWrapper>
          <SignBox>
            <Body1>이름</Body1>
            <Body1>ooo</Body1>
          </SignBox>
          <SignBox>
            <Body1>닉네임</Body1>
            <Body1>ooo</Body1>
          </SignBox>
          <SignBox>
            <Body1>휴대폰 번호</Body1>
            <Body1>010-1234-5678</Body1>
          </SignBox>
          <SignBox>
            <Body1>이메일</Body1>
            <Body1>ewha@ewhain.com</Body1>
          </SignBox>
          <SignBox>
            <Body1>비밀번호</Body1>
            <Body1>******</Body1>
          </SignBox>
        </ContentWrapper>
      </ExBtnWrapper>
      <ModifyBtn />
    </Wrapper>
  );
}
