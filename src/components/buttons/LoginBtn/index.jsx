import styled from "styled-components";
import { gray400, mainColor } from "../../../styles/colors";

export default function LoginBtn() {
  return <LoginButton>로그인</LoginButton>;
}

const LoginButton = styled.button`
  min-width: 70px;
  height: 122px;
  border-radius: 5px;
  border: none;
  background: ${mainColor};
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: white;
  box-shadow: 0 4px 4px ${gray400};
`;
