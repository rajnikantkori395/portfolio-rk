import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Router, useRouter } from "next/router";

import Layout from "../src/containers/layout/layout";

const theme = {
  colors: {
    primary: "#990011",
    // primary: "#EE4E34",
    // primary: "#2C2C54",
    secondary: "#474787",
    accent1: "#AAABB8",
    accent2: "#ECECEC",
    paragraphText: "#ECECEC",
    heading: "#ECECEC",
    subheading: "#AAABB8",
    button: "#2C2C54",
    background: "#2C2C54",
    card: "#474787",
    text:"#fff"
  },
};
const themeColors = {
  classicNeutrals: {
    primary: "#333333",
    secondary: "#FFFFFF",
    accent1: "#CCCCCC",
    accent2: "#990000",
    accent3: "#FFCC00",
    accent4: "#0066CC",
    accent5: "#FF9933",
    paragraphText: "#333333",
    heading: "#333333",
    subheading: "#777777",
    button: "#0066CC",
    background: "#FFFFFF",
    card: "#CCCCCC",
  },
  freshAndVibrant: {
    primary: "#44AACC",
    secondary: "#FFFFFF",
    accent1: "#EEFF00",
    accent2: "#FF6600",
    accent3: "#AA22BB",
    accent4: "#FF3399",
    accent5: "#66CC33",
    paragraphText: "#333333",
    heading: "#44AACC",
    subheading: "#AA22BB",
    button: "#FF6600",
    background: "#FFFFFF",
    card: "#EEFF00",
  },
  elegantMonochrome: {
    primary: "#222222",
    secondary: "#FFFFFF",
    accent1: "#888888",
    accent2: "#DDDDDD",
    accent3: "#FF6600",
    accent4: "#777777",
    accent5: "#CCCCCC",
    paragraphText: "#222222",
    heading: "#222222",
    subheading: "#777777",
    button: "#FF6600",
    background: "#FFFFFF",
    card: "#DDDDDD",
  },
  natureInspired: {
    primary: "#007F4F",
    secondary: "#FFFFFF",
    accent1: "#D9EAD3",
    accent2: "#FFC107",
    accent3: "#005377",
    accent4: "#99CC00",
    accent5: "#FF6600",
    paragraphText: "#333333",
    heading: "#007F4F",
    subheading: "#005377",
    button: "#FFC107",
    background: "#FFFFFF",
    card: "#D9EAD3",
  },
  minimalist: {
    primary: "#FFFFFF",
    secondary: "#000000",
    accent1: "#DDDDDD",
    accent2: "#999999",
    accent3: "#FF5733",
    accent4: "#66CCCC",
    accent5: "#FFCC66",
    paragraphText: "#333333",
    heading: "#000000",
    subheading: "#999999",
    button: "#FF5733",
    background: "#FFFFFF",
    card: "#DDDDDD",
  },
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const site = "https://xyz.in";
  const canonicalURL = `${site}${router.asPath.split("?")[0]}`;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
