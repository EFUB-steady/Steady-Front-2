import styled from "styled-components";
import logo from "../../../assests/SteadyDay_logo.png";
import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";
import { StudyName } from "./styles";

export default function Header() {
  return (
    <>
      <LogoutBtn />
      <Wrapper>
        <LogoImg src={logo} />
        <NowBtn />
        <StudyName>현재 페이지</StudyName>
        <BtnWrapper>
          <MyStudyBtn />
          <MakeStudyBtn />
          <MyInfoBtn />
          <LogoutBtn />
        </BtnWrapper>
      </Wrapper>
    </>
  );
}
const LogoImg = styled.img``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const BtnWrapper = styled.div``;
