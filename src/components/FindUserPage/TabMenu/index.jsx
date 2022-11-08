import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../routes/routes";
import { ewhaGreen, gray200 } from "../../../styles/colors";
import FindIdInputArea from "../FindIdInputArea";
import FindPwInputArea from "../FindPwInputArea";
export default function TabMenu(find) {
  return (
    <Column>
      <Row>
        <Link
          to={routes.FINDUSER + `?find=id`}
          style={{ textDecoration: "none" }}
        >
          <Tab active={find.find == "id" ? true : false}>아이디 찾기</Tab>
        </Link>
        <Link
          to={routes.FINDUSER + `?find=pw`}
          style={{ textDecoration: "none" }}
        >
          <Tab active={find.find == "pw" ? true : false}>비밀번호 찾기</Tab>
        </Link>
      </Row>
      {find.find == "id" && <FindIdInputArea />}
      {find.find == "pw" && <FindPwInputArea />}
    </Column>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 30px;
`;
const Tab = styled.div`
  display: flex;
  width: 200px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => (props.active ? ewhaGreen : gray200)};
  color: ${(props) => (props.active ? "white" : ewhaGreen)};
  font-size: 15;
  font-weight: 600;
`;
