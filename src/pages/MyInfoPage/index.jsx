import React from "react";
import { Wrapper, StudyInfoWrapper } from "./styles";
import Container from "../../components/common/Container";
import Header from "../../components/MemberMain/Header";
import EntireStudy from "../../components/MyInfoPage/EntireStudy";
import EstablishedStudy from "../../components/MyInfoPage/EstablishedStudy";
import MyInfo from "../../components/MyInfoPage/MyInfo";
import { DivideLine } from "./styles";

export default function MemberMainPage() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <DivideLine />

        <StudyInfoWrapper>
          <p>스터디 정보</p>
          <EntireStudy />
          <EstablishedStudy />
        </StudyInfoWrapper>
        <DivideLine />
        <MyInfo />
      </Wrapper>
    </Container>
  );
}
