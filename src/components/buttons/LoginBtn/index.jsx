import styled from "styled-components";
import { ewhaGreen, gray400 } from "../../../styles/colors";

export default function LoginBtn() {
  return <LoginButton>로그인</LoginButton>;
}

const LoginButton = styled.button`
  min-width: 70px;
  height: 122px;
  border-radius: 5px;
  border: none;
  background: ${ewhaGreen};
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: white;
  box-shadow: 0 4px 4px ${gray400};
  margin-left: 10px;
`;
