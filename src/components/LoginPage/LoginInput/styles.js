import styled from "styled-components";
import { gray400 } from "../../../styles/colors";

export const Row = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: ${(props) => props.justifyContent};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const TextButton = styled.div`
  font-size: 13px;
  color: ${gray400};
  margin: 0 15px;
`;
