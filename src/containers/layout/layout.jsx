import { useState } from "react";
import { Roboto } from "@next/font/google";

import Header from "../../components/header/header";
import ContactPopup from "../../components/contact-popup/contact-popup";
import CallIcon from "../../components/call-icon/call-icon";
import Footer from "../../components/footer/footer";

import { Container, PageContainer } from "./layout.styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <Container className={roboto.className}>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
      <CallIcon setIsPopupActive={setIsPopupActive} />
      <ContactPopup
        isPopupActive={isPopupActive}
        setIsPopupActive={setIsPopupActive}
      />
    </Container>
  );
};

export default Layout;
