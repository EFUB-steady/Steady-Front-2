import React from "react";
import ShortcutBtn from "../../buttons/ShortcutBtn";
import EntireStudyBtn from "./../../buttons/EntireStudyBtn";
import EstablishedStudyBtn from "./../../buttons/EstablishedStudyBtn";
import { StudyList, BtnWrapper, Wrapper } from "./styles";
import { Bold, Body2 } from "./../../../styles/text";
import { ContentWrapper } from "../MyInfo/styles";

export default function EntireStudy() {
  return (
    <Wrapper>
      <ContentWrapper>
        <StudyList>
          <Body2>TMI</Body2>
          <ShortcutBtn />
        </StudyList>
        <StudyList>
          <Body2>기상 스터디</Body2>
          <ShortcutBtn />
        </StudyList>
        <StudyList>
          <Body2>신문 스터디</Body2>
          <ShortcutBtn />
        </StudyList>
      </ContentWrapper>
    </Wrapper>
  );
}
