import Head from "next/head";

// import MenuBar from "@/components/MenuBar";
import NavBar from "@/components/NavBar";
import Carroceu from "@/components/Carroceu";

import { Container } from "#/styles/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>GL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Carroceu />
    </Container>
  );
};

export default Home;
