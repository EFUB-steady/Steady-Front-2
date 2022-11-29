import React from "react";
import { Wrapper, InfoWrapper, RoundIndex, Box } from "../Auth/styles";

export default function Auth() {
  return (
    <Wrapper>
      <InfoWrapper>
        <RoundIndex>User1</RoundIndex>
        <Box>오늘의 인증</Box>
      </InfoWrapper>
    </Wrapper>
  );
}
