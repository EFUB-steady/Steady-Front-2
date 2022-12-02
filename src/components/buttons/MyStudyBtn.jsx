import styled from "styled-components";

export default function MyStudyBtn() {
  return <Button>My Study</Button>;
}

const Button = styled.button`
  width: 102px;
  height: 36px;
  background: white;
  border: white;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;
