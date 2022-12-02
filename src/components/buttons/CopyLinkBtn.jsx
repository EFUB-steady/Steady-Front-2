import styled from "styled-components";
import { ewhaGreen } from "../../styles/colors";

export default function CopyLinkBtn() {
  return <Button>링크 복사</Button>;
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  margin: 5px;
  background: ${ewhaGreen};
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;
