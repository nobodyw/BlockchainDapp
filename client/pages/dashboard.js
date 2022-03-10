import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import {Container, Row, Col} from 'react-bootstrap';
import style from '../Component/dashboard.module.css';
import Wallet from '../Component/Wallet';
import { useEffect } from 'react';


const Dashboard = () => {
    const { isAuthenticated, logout, user } = useMoralis();
    const router = useRouter();
    

    if(!isAuthenticated){
        useEffect(() => {
            router.replace("/");
        });
        return null;
    }
    else{
        return (
            <>
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
                        {user ? <Wallet account={user}/> : ''}
                    </Row>
                </Container>

            </div>
            </>
        )
    }
}

export default Dashboard