import React from "react";
import { Wrapper, StudyInfoWrapper } from "./styles";

import Header from "../../components/MemberMain/Header";
import EntireStudy from "../../components/MyInfoPage/EntireStudy";
import EstablishedStudy from "../../components/MyInfoPage/EstablishedStudy";
import MyInfo from "../../components/MyInfoPage/MyInfo";

export default function MemberMainPage() {
  return (
    <Wrapper>
      <Header />
      <StudyInfoWrapper>
        <EntireStudy />
        <EstablishedStudy />
      </StudyInfoWrapper>
      <MyInfo />
    </Wrapper>
  );
}
