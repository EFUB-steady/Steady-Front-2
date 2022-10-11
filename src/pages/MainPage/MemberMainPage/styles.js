import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex: 1;
`;

export const LeftContainer = styled.div`
  width: 65%;
  float: left;
  background-color: red;
`;

export const RightContainer = styled.div`
  width: 30%;
  float: left;
  display: flex;
  justify-content: center;
  background-color: green;
`;
