import { useState } from "react";
import styled from "styled-components";

const ModalButton = styled.button`
  width: 120px;
  height: 60px;
  background-color: #4800cf;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  width: 300px;
  height: 130px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const ModalTitle = styled.span`
  color: #4800cf;
  font-size: 20px;
  font-weight: 600;
`;

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalIsOpen = () => {
    setIsOpen(true);
  };

  const handleModalIsClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <ModalOverlay>
          <ModalWrapper>
            <ModalCloseButton onClick={handleModalIsClose}>
              &times;
            </ModalCloseButton>
            <ModalTitle>HELLO CODESTATES!</ModalTitle>
          </ModalWrapper>
        </ModalOverlay>
      ) : (
        <ModalButton onClick={handleModalIsOpen}>Open Modal</ModalButton>
      )}
    </>
  );
}

export default Modal;
