import React from "react";
import styled from "styled-components";
import AuthDay from "../../components/MakeStudy/StudyAuth/AuthDay";
import Penalty from "../../components/MakeStudy/StudyAuth/Penalty";
import StudyName from "../../components/MakeStudy/StudyInfo";
import Header from "../../components/MemberMain/Header";
import { DivideLine, InputWrapper, Bold, Button } from "./styles";

export default function MakeStudyPage() {
  return (
    <>
      <Container>
        <Header />
        <Button>개설하기</Button>
        <DivideLine />
        <Container>
          <Bold>스터디 정보</Bold>
          <InputWrapper>
            <StudyName />
          </InputWrapper>
          <DivideLine />
          <Bold>스터디 인증</Bold>
          <InputWrapper>
            <AuthDay />
            <Penalty />
          </InputWrapper>
        </Container>
      </Container>
    </>
  );
}

export const StudyInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
`;

