import logo from "../../../assets/SteadyDay_logo.png";

import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";

import { LogoImg, StudyName, BtnWrapper, Wrapper } from "./styles";

export default function Header({ children }) {
  let navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <LogoImg
          src={logo}
          onClick={() => {
            navigate(routes.MAIN);
          }}
        />
        <StudyName>{children}</StudyName>
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
