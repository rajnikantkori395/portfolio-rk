import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  position: relative;
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

export const PageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
   
  max-width: 100vw;
  overflow-x: hidden;
  
`;
