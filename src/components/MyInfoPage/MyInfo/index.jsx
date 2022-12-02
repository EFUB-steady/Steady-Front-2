import { SignBox, Wrapper, ContentWrapper, ExBtnWrapper } from "./styles";
import { Bold, Body1 } from "../../../styles/text";

import React from "react";

import routes from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import { GreenBtn } from "../../buttons/GreenBtn";
import { useUser } from "./../../../api/recoil/user/useUser";

export default function MyInfo() {
  let navigate = useNavigate();
  const { user } = useUser();
  return (
    <Wrapper>
      <ExBtnWrapper>
        <Bold>내 정보</Bold>
        <ContentWrapper>
          <SignBox>
            <Body1>이름</Body1>
            <Body1>{user.data.name}</Body1>
          </SignBox>
          <SignBox>
            <Body1>닉네임</Body1>
            <Body1>{user.data.nickname}</Body1>
          </SignBox>
          <SignBox>
            <Body1>휴대폰 번호</Body1>
            <Body1>{user.data.phone}</Body1>
          </SignBox>
          <SignBox>
            <Body1>이메일</Body1>
            <Body1>{user.data.email}</Body1>
          </SignBox>
        </ContentWrapper>
      </ExBtnWrapper>
      <GreenBtn
        onClick={() => {
          navigate(routes.MODIFYINFO);
        }}
      >
        수정
      </GreenBtn>
    </Wrapper>
  );
}
