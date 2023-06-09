import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: ${(props) => (props.isActive ? "0" : "50vw")};
  bottom: ${(props) => (props.isActive ? "0" : "50vh")};
  z-index: 9;
  width: ${(props) => (props.isActive ? "100vw" : "0px")};
  height: ${(props) => (props.isActive ? "100vh" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
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
`;
