import React from "react";
import { Wrapper, StudyInfoWrapper } from "./styles";

import Header from "../../components/MemberMain/Header";
import EntireStudy from "../../components/MyInfoPage/EntireStudy";
import EstablishedStudy from "../../components/MyInfoPage/EstablishedStudy";
import MyInfo from "../../components/MyInfoPage/MyInfo";
import { DivideLine } from "./styles";

export default function MemberMainPage() {
  return (
    <Wrapper>
      <Header />
      <DivideLine />

      <StudyInfoWrapper>
        <EntireStudy />
        <EstablishedStudy />
      </StudyInfoWrapper>
      <DivideLine />
      <MyInfo />
    </Wrapper>
  );
}
