import StyledModal from "@/src/components/styled-modal/styled-modal";
import { Container } from "./homepage.styles";
import { useState } from "react";
import HeroSection from "@/src/components/hero-section/hero-section";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <HeroSection />

      {isOpen && (
        <StyledModal
          title="Modal Title"
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <h1>lskanclk </h1>
        </StyledModal>
      )}
    </Container>
  );
};

export default Homepage;
