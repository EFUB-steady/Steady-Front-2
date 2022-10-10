import React from "react";
import SigninInput from "../SigninInput";
import logo from "../../../assets/LogoHorizontal.png";
import { Column, LogoImg, Row } from "./styles";
import SigninBtn from "../../buttons/SigninBtn";

export default function SigninArea() {
  return (
    <Row>
      <Column>
        <LogoImg src={logo} />
        <SigninInput />
        <SigninBtn />
      </Column>
    </Row>
  );
}
