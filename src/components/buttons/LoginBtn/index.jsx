import styled from "styled-components";
import { ewhaGreen, gray400 } from "../../../styles/colors";
import { AuthService } from "../../../api/services/AuthService";

export default function LoginBtn() {
  // const { loginReset } = useLoginInput();

  const loginHandler = async () => {
    await AuthService.getToken()
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  // const { userAPI } = useUserAPI({
  //   onSuccess: () => {
  //     console.log("success");
  //   },
  //   onFail: () => {
  //     console.log("fail");
  //   },
  // });

  // const loginHandler = () => {
  //   loginAPI({
  //     onSuccess: () => {
  //       loginReset();
  //       userAPI();
  //     },
  //     onFail: () => {
  //       console.log("fail");
  //     },
  //   });
  // };

  // if (isLoginLoading) return <div>Loading..</div>;
  return (
    <>
      <LoginButton onClick={loginHandler}>로그인</LoginButton>;
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
