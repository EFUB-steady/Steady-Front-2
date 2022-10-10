import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Column, Row, Text, SmallText } from "./styles";
import PhoneInput from "../PhoneInput";
import EmailInput from "../EmailInput";

export default function SigninInput() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordWrong, setPasswordWrong] = useState(false);
  return (
    <Row>
      <Column>
        <Row>
          <Text>이름(실명)</Text>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{ my: "10px" }}
            name="name"
            fullWidth
          />
        </Row>
        <Row>
          <Text>닉네임</Text>
          <TextField
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            sx={{ my: "10px" }}
            name="nickname"
            fullWidth
          />
        </Row>
        <Row>
          <Text>휴대폰 번호</Text>
          <PhoneInput />
        </Row>
        <Row>
          <Text>이메일 아이디</Text>
          <EmailInput />
        </Row>
        <Row>
          <Text>비밀번호</Text>
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            sx={{ my: "10px" }}
            name="password"
            type={"password"}
            fullWidth
          />
          <div style={{ minWidth: "270px" }}>
            <SmallText>영문, 숫자 조합으로 8글자 이상이어야 합니다.</SmallText>
          </div>
        </Row>
        <Row>
          <Text>비밀번호 확인</Text>
          <TextField
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            sx={{ my: "10px" }}
            type={"password"}
            fullWidth
          />
          <div style={{ minWidth: "270px" }}>
            <SmallText>
              {passwordWrong && "같은 비밀번호를 입력하십시오."}
            </SmallText>
          </div>
        </Row>
      </Column>
    </Row>
  );
}
