import styled from "styled-components";
import AuthBtn from "../../buttons/AuthBtn";

export default function DateAndAuthBtn() {
  return (
    <Wrapper>
      <p>날짜</p>
      <p>스터디 이름</p>
      <AuthBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
