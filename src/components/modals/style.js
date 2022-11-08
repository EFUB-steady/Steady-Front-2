import styled from "styled-components";
export const ModalSection = styled.section`
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modal-show 0.3s;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 16px 50px;
  background-color: #f1f1f1;

  font-weight: 900;
  font-size: 20px;
  font-family: "Pretendard";
  font-style: normal;
`;

export const ModalMain = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dee2e6;
  justify-content: space-between;
  align-items: flex-end;
`;
