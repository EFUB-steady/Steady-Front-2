import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/LogoHorizontal.png";
import TabMenu from "../../components/FindUserPage/TabMenu";
import queryString from "query-string";

export default function FindUserPage(props) {
  const [searchParams] = useSearchParams();
  const query = queryString.parse(searchParams.toString());
  return (
    <Wrapper>
      <LogoImg src={logo} />
      <TabMenu find={query.find} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
`;
