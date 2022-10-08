import React from "react";
import { Wrapper } from "./styles";
import DateAndAuth from "../../../components/MemberMain/DateAndAuth";
import Header from "../../../components/MemberMain/Header";
import Info from "../../../components/MemberMain/Info";

export default function MemberMainPage() {
  return (
    <Wrapper>
      <Header />
      <DateAndAuth />
      <Info />
    </Wrapper>
  );
}
