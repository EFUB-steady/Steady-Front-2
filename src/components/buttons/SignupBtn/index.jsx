import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ACCESS_TOKEN } from "../../../api/constants/config";
import useSignupInput from "../../../api/recoil/SignUp/useSignup";
import { SignupService } from "../../../api/services/SignupService";
import { ewhaGreen, gray400 } from "../../../styles/colors";
import routes from "../../../routes/routes";

export default function SignupBtn() {
  const navigate = useNavigate();
  const { name, nickname, email, password, phone } = useSignupInput();

  const signupHandler = async () => {
    await SignupService.getAccessToken(name, nickname, email, password, phone)
      .then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        console.log("hello");
      })
      .catch((err) => {
        console.log("signup err", err);
      })
      .finally(() => {
        navigate(routes.LOGIN);
      });
  };
  return <Wrapper onClick={signupHandler}>회원가입</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  display: flex;
  height: 40px;
  width: 100%;
  color: white;
  background-color: ${ewhaGreen};
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 4px ${gray400};
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
