import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { ewhaGreen } from "../../../styles/colors";

export default function FindIdInputArea() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  return (
    <Wrapper>
      <Row>
        <Text>이름(실명)</Text>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          fullWidth
        />
      </Row>
      <Row>
        <Text>휴대폰 번호</Text>
        <TextField
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          name="phone"
          placeholder="- 없이 입력"
          fullWidth
        />
      </Row>
      <EnterBtn>확인</EnterBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

const Text = styled.div`
  font-size: 16;
  width: 40%;
`;

const EnterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${ewhaGreen};
  color: white;
  font-size: 15;
  font-weight: 600;
  margin: 15px 0;
`;
