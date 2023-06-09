import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 7;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
