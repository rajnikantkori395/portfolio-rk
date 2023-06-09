import { Container } from "./call-icon.styles";

const CallIcon = ({ setIsPopupActive }) => {
  return (
    <Container
      onClick={() => {
        setIsPopupActive(true);
      }}
    >
      Call
    </Container>
  );
};

export default CallIcon;
