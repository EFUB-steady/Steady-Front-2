import { useState } from "react";
import styled from "styled-components";
import Modal from "../modals/index";
import { ewhaGreen } from "../../styles/colors";

export default function AuthBtn() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <>
      <Button onClick={openModal}>인증하기</Button>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={month + "월 " + day + "일 스터디 인증하기"}
      >
        <AuthPic>사진을 업로드 해주세요.</AuthPic>
        <ButtonWrapper>
          <CloseButton onClick={closeModal}>취소하기</CloseButton>
          <Button>인증하기</Button>
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
`;

const CloseButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;

  background: #b4b3b3;
  border: #b4b3b3;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
  margin-right: 10px;
`;

const AuthPic = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 5px;
  border: 1.5px dashed #b4b3b3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  color: #b4b3b3;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 30px;
  margin-right: 40px;
`;
