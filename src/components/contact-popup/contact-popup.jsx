import { Container, Popup } from "./contact-popup.styles";

const ContactPopup = ({ isPopupActive, setIsPopupActive }) => {
  return (
    <Container isActive={isPopupActive}>
      <Popup
        onClick={() => {
          setIsPopupActive(false);
        }}
      >
        Popup
      </Popup>
    </Container>
  );
};

export default ContactPopup;
