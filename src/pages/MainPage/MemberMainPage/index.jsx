import React from "react";
import { useState, useEffect, Button } from "react";
import { LeftContainer, RightContainer, Wrapper, Container } from "./styles";
import DateAndAuth from "../../../components/MemberMain/DateAndAuth";
import Header from "../../../components/MemberMain/Header";
import Info from "../../../components/MemberMain/Info";
import Mcalendar from "../../../components/MCalendar/MCalendar";
import Auth from "../../../components/MemberMain/Auth";

// export function Clicking(props) {
//   const isClicked = props.isClicked;
//   if (isClicked) {
//     return <Auth />;
//   }
//   return <Info />;
// }

export default function MemberMainPage() {
  const [viewNext, setViewNext] = useState(false);

  if (!viewNext) {
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
  if (viewNext) {
    return (
      <Wrapper>
        <Header />
        <DateAndAuth />
        <Container>
          <LeftContainer>
            <Mcalendar />
          </LeftContainer>
          <RightContainer>
            <Auth />
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}
