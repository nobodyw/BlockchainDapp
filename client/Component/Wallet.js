import { useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import style from '../Component/wallet.module.css';

export default function Wallet(props){
    const [balance, setBalance] = useState(0);
    const Web3Api = useMoralisWeb3Api();
    const addressAccount = props.account.attributes.ethAddress;

    useEffect(() => {
        const fetchBalance = async() => {
            await Web3Api.account.getNativeBalance({
                chain: 'bsc testnet',
                address: addressAccount}
            ).then(r => setBalance(r.balance / 10 ** 18 ));
        }
        fetchBalance();
    },[]);

    return(
        <>
            <button className={style.btn +' px-7 py-4 text-xl rounded-xl'}>
                <p>address : {addressAccount.slice(0,3)+'***'+addressAccount.slice(10,13)}</p>
                <p>BNB: {balance}</p>
            </button>
        </>
    )
}

