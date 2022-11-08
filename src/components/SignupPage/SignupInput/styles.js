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
  margin: 15px 0;
  min-width: 100%;
`;

export const Text = styled.div`
  display: flex;
  font-size: 16px;
  min-width: 30%;
`;

export const SmallText = styled.div`
  font-size: 13px;
  color: ${gray400};
`;
