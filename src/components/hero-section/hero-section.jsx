
import React from 'react';
import { BackgroundVideo, HeroSectionWrapper, SearchBar, TypingText } from './hero-section.styles';


const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <BackgroundVideo autoPlay loop muted>
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <div>
        <TypingText>
          Welcome to my Website
        </TypingText>
        <SearchBar type="text" placeholder="Search..." />
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
