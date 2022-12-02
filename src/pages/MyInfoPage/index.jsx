import React from "react";
import { Wrapper, StudyInfoWrapper } from "./styles";
import Container from "../../components/common/Container";
import Header from "../../components/MemberMain/Header";
import EntireStudy from "../../components/MyInfoPage/EntireStudy";
import EstablishedStudy from "../../components/MyInfoPage/EstablishedStudy";
import MyInfo from "../../components/MyInfoPage/MyInfo";
import { DivideLine } from "./styles";
import { Bold } from "../../styles/text";

export default function MyInfoPage() {
  return (
    <Container>
      <Wrapper>
        <Header>My Info</Header>
        <DivideLine />
        <StudyInfoWrapper>
          <Bold>스터디 정보</Bold>
          <EntireStudy />
          <EstablishedStudy />
        </StudyInfoWrapper>
        <DivideLine />
        <MyInfo />
      </Wrapper>
    </Container>
  );
}
