import Head from "next/head";

import { Container, Description } from "#/styles/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description>teste</Description>
    </Container>
  );
};

export default Home;
