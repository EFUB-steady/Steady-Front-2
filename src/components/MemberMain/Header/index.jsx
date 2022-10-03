import styled from "styled-components";
import logo from "../../../assests/SteadyDay_logo.png";
import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";
export default function Header() {
  return (
    <Wrapper>
      <LogoImg src={logo} />
      <BtnWrapper>
        <MyStudyBtn />
        <MakeStudyBtn />
        <MyInfoBtn />
        <LogoutBtn />
      </BtnWrapper>
    </Wrapper>
  );
}
const LogoImg = styled.img``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BtnWrapper = styled.div``;
