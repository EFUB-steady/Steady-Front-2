import styled from "styled-components";
import AuthBtn from "../../buttons/AuthBtn";
import { StudyName } from "./styles";

export default function DateAndAuthBtn() {
  return (
    <Wrapper>
      <p>날짜</p>
      <StudyName>스터디 이름</StudyName>
      <AuthBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid grey; */
`;
