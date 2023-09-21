import StyledModal from "@/src/components/styled-modal/styled-modal";
import { Container } from "./homepage.styles";
import { useState } from "react";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      Homepage
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
