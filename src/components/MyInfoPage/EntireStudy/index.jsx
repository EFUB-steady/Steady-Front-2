import React from "react";
import ShortcutBtn from "../../buttons/ShortcutBtn";
import EntireStudyBtn from "./../../buttons/EntireStudyBtn";
import EstablishedStudyBtn from "./../../buttons/EstablishedStudyBtn";
import { StudyList } from "./styles";

export default function EntireStudy() {
  return (
    <>
      <EntireStudyBtn />
      <EstablishedStudyBtn />
      <StudyList>
        <p>TMI</p>
        <ShortcutBtn />
      </StudyList>
      <StudyList>
        <p>기상 스터디</p>
        <ShortcutBtn />
      </StudyList>
      <StudyList>
        <p>신문 스터디</p>
        <ShortcutBtn />
      </StudyList>
    </>
  );
}
