import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import style from '../Component/dashboard.module.css';

const Wallet = () => {
const { isAuthenticated, authenticate, logout, user } = useMoralis();
const router = useRouter();

const addressEth = user.attributes.ethAddress.substr(0,5)+"***"+user.attributes.ethAddress.substr(5,5);

// useEffect(() => {
// if (!isAuthenticated) router.replace("/");
// }, [isAuthenticated]);



return (
    <div className={style.wallet + ' rounded-xl'}><p>{addressEth}</p></div>
)
}

export default Wallet