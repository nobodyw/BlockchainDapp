import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import style from '../Component/dashboard.module.css';
import Wallet from '../Component/Wallet';

const Dashboard = () => {
const { isAuthenticated, authenticate, logout, user } = useMoralis();
const router = useRouter();

const addressEth = user.attributes.ethAddress.substr(0,5)+"***"+user.attributes.ethAddress.substr(5,5);

useEffect(() => {
if (!isAuthenticated) router.replace("/");
}, [isAuthenticated]);



return (
<div>
    <Head>
        <title>Nobodyw Dapp</title>
        <meta name="description" content="Blockchain dapp" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
        <Row>
            <Col>
            <button onClick={()=> logout()}
                className={style.btn +' px-7 py-4 text-xl rounded-xl'}
                >
                Déconnexion
            </button>
            </Col>
            <Wallet/>
        </Row>
    </Container>

</div>
)
}

export default Dashboard