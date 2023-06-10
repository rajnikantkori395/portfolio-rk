import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  z-index: 100;
  width: 100%;
`;

export const Logo = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.primary};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const MenuItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
