
import styled, { keyframes } from 'styled-components';

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
  overflow: hidden;
  white-space: nowrap;

  &::after {
    content: '|';
    display: inline-block;
    animation: ${typingAnimation} 1s infinite;
  }
`;

export const SearchBar = styled.input`
  margin-top: 20px;
  padding: 10px;
  font-size: 1em;
`;