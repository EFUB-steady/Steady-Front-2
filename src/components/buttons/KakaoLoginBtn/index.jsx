import styled from "styled-components";
import {
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
} from "../../../api/constants/config";
import kakaoLoginBtn from "../../../assets/kakao_login_large_wide.png";

export default function KakaoLoginBtn() {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <>
      <KakaoLoginButton
        src={kakaoLoginBtn}
        onClick={() => {
          window.open(url, "_blank");
        }}
      />
    </>
  );
}

const KakaoLoginButton = styled.img`
  width: 300px;
  cursor: pointer;
`;
