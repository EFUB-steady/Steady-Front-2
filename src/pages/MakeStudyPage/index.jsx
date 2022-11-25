import React from "react";
import styled from "styled-components";
import AuthDay from "../../components/MakeStudy/StudyAuth/AuthDay";
import Penalty from "../../components/MakeStudy/StudyAuth/Penalty";
import StudyName from "../../components/MakeStudy/StudyInfo/StudyName";
import StudyNotice from "../../components/MakeStudy/StudyInfo/StudyNotice";
import Header from "../../components/MemberMain/Header";
import { DivideLine, InputWrapper, Bold, Button } from "./styles";

export default function MakeStudyPage() {
  return (
    <>
      <Header /> 
      <Button>수정하기</Button>
      <DivideLine />
      <Bold>스터디 정보</Bold>

      <InputWrapper>
        <StudyName />
        <StudyNotice />
      </InputWrapper>

      <DivideLine />
      <Bold>스터디 인증</Bold>
      <InputWrapper>
        <AuthDay />
        <Penalty />
      </InputWrapper>
    </>
  );
}

export const StudyInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;