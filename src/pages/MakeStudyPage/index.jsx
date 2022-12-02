import React from "react";
import styled from "styled-components";
import SaveBtn from "../../components/buttons/SaveBtn";
import AuthDay from "../../components/MakeStudy/AuthDay";
import Penalty from "../../components/MakeStudy/Penalty";
import StudyInfo from "../../components/MakeStudy/StudyInfo";
import Header from "../../components/MemberMain/Header";
import { DivideLine, InputWrapper, Bold } from "./styles";

export default function MakeStudyPage() {
  return (
    <>
      <Container style={{ padding: "1%" }}>
        <Header>Make Study</Header>
        <SaveBtn />
        <DivideLine />
        <Container>
          <Wrapper>
            <Bold>스터디 정보</Bold>
            <InputWrapper>
              <StudyInfo />
            </InputWrapper>
          </Wrapper>
          <DivideLine />
          <Wrapper>
            <Bold>스터디 인증</Bold>
            <InputWrapper>
              <AuthDay />
              <Penalty />
            </InputWrapper>
          </Wrapper>
        </Container>
      </Container>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 15%;
  padding-right: 10%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
