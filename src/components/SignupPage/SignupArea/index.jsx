import React from "react";
import SignupInput from "../SignupInput";
import logo from "../../../assets/LogoHorizontal.png";
import { Column, LogoImg, Row } from "./styles";
import SignupBtn from "../../buttons/SignupBtn";

export default function SignupArea() {
  return (
    <Row>
      <Column>
        <LogoImg src={logo} />
        <SignupInput />
        <SignupBtn />
      </Column>
    </Row>
  );
}
