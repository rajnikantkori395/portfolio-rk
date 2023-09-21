import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  @media (max-width: 768px) {
    align-items: flex-end;
    /* padding-bottom: 2rem; */
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 8px;
  height: 82%;
  width: 90%;
  @media (max-width: 768px) {
    width: 93.5%;
    animation: slideIn 0.3s ease-in-out forwards;
  }

  @media (min-width: 769px) {
    animation: popUp 0.3s ease-in-out forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes popUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  border: none;
  top: 2%;
  right: 4%;
  background: transparent;
  font-weight: bolder;
  font-size: medium;
  color: ${(props) => props.theme.colors.dark};
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
`;
