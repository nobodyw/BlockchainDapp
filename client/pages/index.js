import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import { Container,Row,Col } from 'react-bootstrap';

function Home(){
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  if(!isAuthenticated){
    return (
      <>
      <Head>
        <title>Nobodyw Dapp</title>
        <meta name="description" content="Blockchain dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Container>
        <Row>
          <Col>
            <div className='justify-center flex' id='titre'>
              <h1>Bienvenue sur Blockchain Dapp !</h1>
            </div>
         </Col>
        </Row>
      </Container>
  
      <div className="flex items-center justify-center">
        <Container>
          <Row>
            <Col>
              <button
                onClick={() =>
                  authenticate({ signingMessage: "authorize your metamsk to access the application" })
                }
                className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
              >
                Connecte toi avec Metamask
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    )
  }
  else{
    router.replace('/dashboard');
    return(<p></p>);
  }
}

export default Home
