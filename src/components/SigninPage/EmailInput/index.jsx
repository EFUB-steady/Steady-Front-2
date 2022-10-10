import React, { useState } from "react";
import { Text, Wrapper } from "./styles";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";

export default function EmailInput() {
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("");

  return (
    <Wrapper>
      <TextField
        value={emailId}
        onChange={(e) => {
          setEmailId(e.target.value);
        }}
        sx={{ my: "10px", mr: "10px" }}
        name="emailId"
      />
      <Text>@</Text>
      <FormControl fullWidth>
        <Select
          id="emailDomain"
          value={emailDomain}
          onChange={setEmailDomain}
          sx={{ my: "10px", ml: "10px" }}
        >
          <MenuItem value={10}>gmail.com</MenuItem>
          <MenuItem value={20}>naver.com</MenuItem>
          <MenuItem value={30}>daum.net</MenuItem>
          <MenuItem value={30}>hanmail.net</MenuItem>
          <MenuItem value={30}>ewhain.net</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
}
