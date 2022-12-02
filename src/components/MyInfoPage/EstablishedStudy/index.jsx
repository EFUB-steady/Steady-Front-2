import React from "react";
import { StudyList, Wrapper } from "../EntireStudy/styles";
import { Body2 } from "../../../styles/text";
import ShortcutBtn from "../../buttons/ShortcutBtn";
import { GreenBtn } from "../../buttons/GreenBtn";
import { ContentWrapper } from "./../MyInfo/styles";
import CopyLinkBtn from "../../buttons/CopyLinkBtn";

export default function EstablishedStudy() {
  return (
    <Wrapper>
      <ContentWrapper>
        <StudyList>
          <Body2>기상 스터디</Body2>
          <ShortcutBtn />
          <CopyLinkBtn />
        </StudyList>
        <StudyList>
          <Body2>신문 스터디</Body2>
          <ShortcutBtn />
          <CopyLinkBtn />
        </StudyList>
      </ContentWrapper>
    </Wrapper>
  );
}
