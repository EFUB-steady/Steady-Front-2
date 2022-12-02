import React from "react";
import { useState } from "react";

import {
  Wrapper,
  StudyInfoWrapper,
  DivideLine,
  BtnWrapper,
  StudyContentWrapper,
} from "./styles";
import Container from "../../components/common/Container";
import Header from "../../components/MemberMain/Header";
import EntireStudy from "../../components/MyInfoPage/EntireStudy";
import EstablishedStudy from "../../components/MyInfoPage/EstablishedStudy";
import MyInfo from "../../components/MyInfoPage/MyInfo";
import { Bold } from "../../styles/text";
import EntireStudyBtn from "../../components/buttons/EntireStudyBtn";
import EstablishedStudyBtn from "../../components/buttons/EstablishedStudyBtn";
import { TextBtn } from "../../components/buttons/TextBtn";

export default function MyInfoPage() {
  const [isNow, setIsNow] = useState(true);
  const handleConfirm = () => {
    setIsNow(!isNow);
  };
  return (
    <Container>
      <Wrapper>
        <Header />
        <DivideLine />
        <BtnWrapper>
          <Bold>스터디 정보</Bold>
          <TextBtn onClick={handleConfirm}>전체 스터디</TextBtn>
          <TextBtn onClick={handleConfirm}>내가 개설한 스터디</TextBtn>
        </BtnWrapper>
        <StudyInfoWrapper>
          {isNow ? <EntireStudy /> : <EstablishedStudy />}
        </StudyInfoWrapper>
        <DivideLine />
        <MyInfo />
      </Wrapper>
    </Container>
  );
}
