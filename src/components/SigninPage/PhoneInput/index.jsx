import React, { useState } from "react";
import { Text, Wrapper } from "./styles";
import { TextField } from "@mui/material";
import { SmallText } from "../SigninInput/styles";

export default function PhoneInput() {
  const [middleNum, setMiddleNum] = useState("");
  const [lastNum, setLastNum] = useState("");
  return (
    <Wrapper>
      <Text>010 -</Text>
      <TextField
        value={middleNum}
        onChange={(e) => {
          setMiddleNum(e.target.value);
        }}
        sx={{ my: "10px", mx: "10px", width: "80px" }}
        name="middleNum"
      />
      <Text>-</Text>
      <TextField
        value={lastNum}
        onChange={(e) => {
          setLastNum(e.target.value);
        }}
        sx={{ my: "10px", mx: "10px", width: "80px" }}
        name="lastNum"
        fullWidth
      />
      <SmallText>이메일 찾기 시 사용됩니다.</SmallText>
    </Wrapper>
  );
}
