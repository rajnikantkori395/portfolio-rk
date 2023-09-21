import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Popup = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(0)")};
  transition: transform 0.3s ease-in-out;
`;
