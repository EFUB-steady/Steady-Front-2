import React from "react";
import { Wrapper, Container, LeftContainer, RightContainer } from "./styles";
import DateAndAuth from "../../../components/MemberMain/DateAndAuth";
import Header from "../../../components/MemberMain/Header";
import Info from "../../../components/MemberMain/Info";
import Mcalendar from "../../../components/MCalendar";

export default function MemberMainPage() {
  return (
    <Wrapper>
      <Header />
      <DateAndAuth />
      <Container>
        <LeftContainer>
          <Mcalendar />
        </LeftContainer>
        <RightContainer>
          <Info />
        </RightContainer>
      </Container>
    </Wrapper>
  );
}
