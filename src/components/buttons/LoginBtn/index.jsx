import styled from "styled-components";
import { ewhaGreen, gray400 } from "../../../styles/colors";
import { useLoginInput } from "../../../api/recoil/loginInput/useLogin";
import { ACCESS_TOKEN } from "../../../api/constants/config";
import { AuthService } from "../../../api/services/AuthService";
import { useUser } from "../../../api/recoil/user/useUser";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";

export default function LoginBtn() {
  const { email, password } = useLoginInput();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const loginHandler = async () => {
    var userId;
    await AuthService.getAccessToken(email, password)
      .then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken); // accessToken을 localStorage에 저장
        userId = res.data.userId;
      })
      .catch((err) => {
        console.log("login err:", err);
      });
    await AuthService.getUser(userId)
      .then((res) => {
        setUser(res);
        navigate(routes.MAIN);
      })
      .catch((err) => {
        console.log("user error:", err);
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
