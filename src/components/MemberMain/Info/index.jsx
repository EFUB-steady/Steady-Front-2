import React from "react";
import { RoundIndex, Box, Wrapper, InfoWrapper } from "./styles";

export default function Info() {
  return (
    <Wrapper>
      <InfoWrapper>
        <RoundIndex>Notice</RoundIndex>
        <Box>
          TMI는 이화여자대학교 기반의 영어 회화 스터디입니다! 지각은 벌금 500원,
          결석은 1000원이라고 생각하시면 됩니다. 매일 30분씩 공부한 걸
          인증해주세요~ 내용이 많아지면 어떻게 될까내용이 많아지면 어떻게
          될까내용이 많아지면 어떻게 될까내용이 많아지면 어떻게 될까내용이
          많아지면 어떻게 될까내용이 많아지면 어떻게 될까
        </Box>
        <RoundIndex>Ranking</RoundIndex>
        <Box>순위</Box>
        <RoundIndex>Penalty</RoundIndex>
        <Box>이번 주 나의 벌금 1000원 현재 쌓인 총 벌금 15000원</Box>
      </InfoWrapper>
    </Wrapper>
  );
}
