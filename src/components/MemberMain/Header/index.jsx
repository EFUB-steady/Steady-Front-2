import logo from "../../../assets/SteadyDay_logo.png";

import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";

import { LogoImg, StudyName, BtnWrapper, Wrapper } from "./styles";

export default function Header({ children }) {
  return (
    <>
      <Wrapper>
        <LogoImg src={logo} />
        <StudyName>{children}</StudyName>{" "}
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
