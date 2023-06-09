import Head from "next/head";

import Homepage from "../src/containers/homepage/homepage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rajnikant Kori - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Homepage />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default Home;
