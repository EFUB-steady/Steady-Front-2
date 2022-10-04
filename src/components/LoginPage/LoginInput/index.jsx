import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Wrapper } from "./styles";

export default function LoginIdInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
