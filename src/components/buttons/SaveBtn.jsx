import styled from "styled-components";
import Modal from "../modals/index";
import { ewhaGreen } from "../../styles/colors";
import { useState } from "react";

export default function SaveBtn() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const makeStudy = async () => {
    setModalOpen(false);

    
  };

  return (
    <>
      <Button onClick={openModal}>저장하기</Button>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={"스터디를 개설하시겠습니까?"}
      >
        <ButtonWrapper>
          <YesBtn onClick={makeStudy}>확인</YesBtn>
          <CloseButton onClick={closeModal}>취소</CloseButton>
        </ButtonWrapper>
      </Modal>
    </>
  );
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;

  background: ${ewhaGreen};
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;

  margin-left: 75%;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const YesBtn = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  margin-right: 5%;

  background: ${ewhaGreen};
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  margin-left: 5%;

  background: #b4b3b3;
  border: #b4b3b3;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
