import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Column, TextButton, Row } from "./styles";
import LoginBtn from "../../buttons/LoginBtn";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";

export default function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <Row>
      <Column>
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ mb: "10px" }}
          placeholder="이메일 아이디"
          name="id"
          fullWidth
        />
        <TextField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀 번호"
          name="pw"
          type="password"
          fullWidth
        />
        <Row justifyContent={"space-between"}>
          <TextButton
            onClick={() => {
              navigate(routes.SIGNIN);
            }}
          >
            회원 가입
          </TextButton>
          <TextButton>아이디 및 비밀번호 찾기</TextButton>
        </Row>
      </Column>
      <LoginBtn />
    </Row>
  );
}
