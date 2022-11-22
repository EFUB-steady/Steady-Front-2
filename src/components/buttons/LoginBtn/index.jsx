import styled from "styled-components";
import { ewhaGreen, gray400 } from "../../../styles/colors";
import { useLoginInput } from "../../../api/recoil/loginInput/useLogin";
import { ACCESS_TOKEN } from "../../../api/constants/config";
import { AuthService } from "../../../api/services/AuthService";

export default function LoginBtn() {
  const { email, password } = useLoginInput();
  const loginHandler = async () => {
    await AuthService.getAccessToken(email, password)
      .then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken); // accessToken을 localStorage에 저장
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <>
      <LoginButton onClick={loginHandler}>로그인</LoginButton>
    </>
  );
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
