import React from "react";
import { Wrapper } from "./styles";
import DateAndAuth from "../../components/MemberMain/DateAndAuth";
import Header from "../../components/MemberMain/Header";
import Info from "../../components/MemberMain/Info";
import Container from "../../components/common/Container";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";

export default function MainPage() {
  return (
    <Container>
      <Wrapper>
        <Header>My Study</Header>
        <DateAndAuth />
        <Info />
      </Wrapper>
    </Container>
  );
}
