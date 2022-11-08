import React from "react";
import { RoundIndex, Box, Wrapper, InfoWrapper } from "./styles";

export default function Info() {
  return (
    <Wrapper>
      <InfoWrapper>
        <RoundIndex>유저이름</RoundIndex>
        <Box>인증한 컨텐츠</Box>
      </InfoWrapper>
    </Wrapper>
  );
}
