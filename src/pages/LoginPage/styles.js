import styled from "styled-components";
import pic from "../../assets/LoginPageNoticePic.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  min-width: 453px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 100px;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: contain;
`;
