import React from "react";
import { LeftContainer, RightContainer, Wrapper, Container } from "./styles";
import DateAndAuth from "../../../components/MemberMain/DateAndAuth";
import Header from "../../../components/MemberMain/Header";
import Info from "../../../components/MemberMain/Info";
import Mcalendar from "../../../components/MCalendar/MCalendar";
import Auth from "../../../components/MemberMain/Auth";

// 날짜 클릭했을 때 랜더링..
function Clicking(props) {
  const isClicked = props.isClicked; //상태
  if (isClicked) {
    return <Auth />;
  }
  return <Info />;
}

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
          <Clicking isClicked={false} />
        </RightContainer>
      </Container>
    </Wrapper>
  );
}

//기본 메인 화면에서 캘린더 날짜 누르면 인증한 목록으로 부분 랜더링
