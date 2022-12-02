import logo from "../../../assets/SteadyDay_logo.png";

import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";

import { LogoImg, StudyName, BtnWrapper, Wrapper } from "./styles";

export default function Header() {
  return (
    <>
      <Wrapper>
        <LogoImg src={logo} />
        {/* <NowBtn /> */}
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
