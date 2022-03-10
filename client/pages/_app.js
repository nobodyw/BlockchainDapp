import { MoralisProvider,Head } from "react-moralis";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {


  return (
    <MoralisProvider
      appId='https://wvzfjosoxxda.usemoralis.com:2053/server'
      serverUrl='axnyKWbfuEcU44UqR2Hi8w30RDGKOm1L4pizyuQd'
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
export default MyApp;