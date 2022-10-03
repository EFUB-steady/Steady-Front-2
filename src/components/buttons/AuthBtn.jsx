import styled from "styled-components";

export default function AuthBtn() {
  return (
    <>
      <Button>인증하기</Button>
    </>
  );
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;

  background: #00462a;
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;
