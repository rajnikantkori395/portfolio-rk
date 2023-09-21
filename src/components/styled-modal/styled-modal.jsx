import React from "react";
import { CloseModal, Content, ModalContainer, ModalContent } from "./styled-modal.styles";

const StyledModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {/* Modal content goes here */}
        <h2>Title: {title}</h2>
        <p>Modal Content</p>
        <Content>{children}</Content>
        <CloseModal onClick={onClose}>X</CloseModal>
      </ModalContent>
    </ModalContainer>
  );
};

export default StyledModal;
