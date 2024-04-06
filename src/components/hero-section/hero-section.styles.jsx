import styled, { keyframes } from "styled-components";

// Define keyframe animation for typing effect
export const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const HeroSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .text-container {
    width: 50%;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const TypingText = styled.div`
  color: white;
  font-size: 2em;
  line-height: 1.3;
  overflow: hidden;
  white-space: nowrap;
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  &::after {
    content: "|";
    display: inline-block;
    animation: ${typingAnimation} 1s infinite;
  }
`;

export const SearchBar = styled.input`
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.7);
  outline: none;
  background: #12330078;
  color: #000000;
  font-family: "Roboto", sans-serif;
  letter-spacing: 4px;
  font-size: 1em;
`;
