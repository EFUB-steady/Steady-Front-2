import React from "react";
import logo from "../../../assets/LogoHorizontal.png";
import LoginInput from "../../../components/LoginPage/LoginInput";
import { Column, LogoImg, Row } from "./styles";

export default function LoginArea() {
  return (
    <Row>
      <Column>
        <LogoImg src={logo} />
        <LoginInput />
      </Column>
    </Row>
  );
}
