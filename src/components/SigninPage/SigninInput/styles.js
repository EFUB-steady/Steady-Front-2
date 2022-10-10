import styled from "styled-components";
import { gray400 } from "../../../styles/colors";

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 15px 0;
`;

export const Text = styled.div`
  display: flex;
  font-size: 16px;
  min-width: 100px;
`;

export const SmallText = styled.div`
  font-size: 13px;
  color: ${gray400};
  margin: 0 15px;
`;
