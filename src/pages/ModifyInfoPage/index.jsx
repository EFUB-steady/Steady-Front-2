import React from "react";
import { Wrapper, InputWrapper, TitleWrapper, DivideLine } from "./styles";
import Container from "../../components/common/Container";
import Header from "../../components/MemberMain/Header";
import SignupInput from "../../components/SignupPage/SignupInput";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import SaveBtn from "./../../components/buttons/SaveBtn";
import { Bold } from "../../styles/text";
import { GreenBtn } from "./../../components/buttons/GreenBtn";

export default function ModifyInfoPage() {
  let navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Header />
        <DivideLine />
        <TitleWrapper>
          <Bold>내 정보 수정</Bold>
          <GreenBtn
            onClick={() => {
              navigate(routes.MYINFO);
            }}
          >
            저장
          </GreenBtn>
        </TitleWrapper>
        <InputWrapper>
          <SignupInput />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
}
