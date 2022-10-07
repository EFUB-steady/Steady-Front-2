import React from "react";
import styled from "styled-components";

export default function StudyNotice() {
  return (
    <Wrapper>
      <Info>설명 및 공지사항</Info>
      <InputNotice />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

export const Info = styled.span`
  margin-right: 30px;
`;

export const InputNotice = styled.div`
  width: 750px;
  height: 120px;
  border: 0.5px solid #000;
  border-radius: 5px;
`;
