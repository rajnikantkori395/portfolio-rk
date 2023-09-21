import { Container, Popup } from "./contact-popup.styles";

const ContactPopup = ({ isPopupActive, setIsPopupActive }) => {
  return (
    <Container
      isActive={isPopupActive}
      onClick={() => {
        setIsPopupActive(false);
      }}
    >
      <Popup isActive={isPopupActive}>Popup</Popup>
    </Container>
  );
};

export default ContactPopup;
