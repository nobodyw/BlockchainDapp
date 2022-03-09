// import type { NextPage } from 'next'
import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Home = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Nobodyw Dapp</title>
        <meta name="description" content="Blockchain dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col>
            <button
              onClick={() =>
                authenticate({ signingMessage: "Authorize linking of your wallet" })
              }
              className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
            >
              Login using Metamask
            </button>
      </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
