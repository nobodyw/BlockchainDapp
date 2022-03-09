import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Nobodyw Dapp</title>
        <meta name="description" content="Blockchain dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        className="px-7 py-4 mb-5 text-xl rounded-xl bg-yellow-300"
      >
        Send 0.1 ETH to owner
      </button>
      <button
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300"
      >
        Logout
      </button>
    </div>
  )
}

export default Home
