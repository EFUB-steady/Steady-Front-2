import styled from "styled-components";
import logo from "../../../assests/SteadyDay_logo.png";
import LogoutBtn from "../../buttons/LogoutBtn";
import MakeStudyBtn from "../../buttons/MakeStudyBtn";
import MyInfoBtn from "../../buttons/MyInfoBtn";
import MyStudyBtn from "../../buttons/MyStudyBtn";
import NowBtn from "../../buttons/NowBtn"; 
export default function Header() {
  return (
    <>
    <LogoutBtn />
    <Wrapper>
      <LogoImg src={logo} />
      <NowBtn />
      <BtnWrapper>
        <MyStudyBtn />
        <MakeStudyBtn />
        <MyInfoBtn />
      </BtnWrapper>
    </Wrapper>
    </> 
  );
}
const LogoImg = styled.img`
margin-left: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 50px;
`;
const BtnWrapper = styled.div``;
