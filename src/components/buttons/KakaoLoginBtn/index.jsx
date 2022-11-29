import styled from "styled-components";
import kakaoLoginBtn from "../../../assets/kakao_login_large_wide.png";

export default function KakaoLoginBtn() {
  return (
    <>
      <KakaoLoginButton src={kakaoLoginBtn} />
    </>
  );
}

const KakaoLoginButton = styled.img`
  width: 300px;
`;
