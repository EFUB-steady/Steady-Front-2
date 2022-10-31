import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Column, Row, Text, SmallText } from "./styles";
import EmailInput from "../EmailInput";

export default function SignupInput() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordWrong, setPasswordWrong] = useState(false);
  return (
    <Column>
      <Row>
        <Text>이름(실명)</Text>
        <Column>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            fullWidth
          />
        </Column>
      </Row>
      <Row>
        <Text>닉네임</Text>
        <Column>
          <TextField
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            name="nickname"
            fullWidth
          />
        </Column>
      </Row>

      <Row>
        <Text>휴대폰 번호</Text>
        <Column>
          <TextField
            value={phoneNum}
            onChange={(e) => {
              setPhoneNum(e.target.value);
            }}
            name="phoneNum"
            type={`tel`}
            fullWidth
          />
          <SmallText>이메일 찾기 시 사용됩니다.</SmallText>
        </Column>
      </Row>

      <Row>
        <Text>이메일 아이디</Text>
        <EmailInput />
      </Row>

      <Row>
        <Text>비밀번호</Text>
        <Column>
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type={"password"}
            fullWidth
          />
          <SmallText>영문, 숫자 조합으로 8글자 이상이어야 합니다.</SmallText>
        </Column>
      </Row>

      <Row>
        <Text>비밀번호 확인</Text>
        <Column>
          <TextField
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type={"password"}
            fullWidth
          />
          <SmallText>
            {passwordWrong && "같은 비밀번호를 입력하십시오."}
          </SmallText>
        </Column>
      </Row>
    </Column>
  );
}
