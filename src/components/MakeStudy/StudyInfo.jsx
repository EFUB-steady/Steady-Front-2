import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function StudyInfo() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <>
      <Column>
        <Row>
          <Info>스터디 이름</Info>
          <Column>
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              size="small"
            />
          </Column>
        </Row>

        <Row>
          <Info>설명 및 공지사항</Info>
          <Column>
            <TextField
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);
              }}
              size="small"
              name="summary"
            />
          </Column>
        </Row>
      </Column>
    </>
  );
}

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  min-width: 80%;
`;

export const Info = styled.span`
  display: flex;
  font-size: 16px;
  min-width: 20%;
`;

