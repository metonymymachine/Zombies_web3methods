import React from 'react'
import ReactDOM from 'react-dom'


const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("wss://eth-mainnet.alchemyapi.io/v2/_k2rn6sEaO0HBMO6huvwfSK-Q52KKYrK");

const contractABI = require("./MadScientists.json");
const contractAddress = "0xCd4CBe63cAe7770Dd9a0029ca60DCaF9DFDece01";

export const theContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);


//const contractABI = [{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_preSaleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_presaleprice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintCount","type":"uint256"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"mintCount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"presaleprice","type":"uint256"}],"name":"setPresaleprice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"preSaleStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"preSaleStop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleStop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function","payable":true}]
const price = 65000000000000000;
const presaleprice = 55000000000000000;


 export const loadCurrentSupply = async () => { 
  const supply = await theContract.methods.totalSupply().call(); 
  return supply;
};

export const loadPreSaleStatus = async () => { 
  const preSaleActive = await theContract.methods._preSaleIsActive.call().call().then(function (res) { return res.toString() }) 
  return preSaleActive;
};

export const loadSaleStatus = async () => { 
  const SaleActive = await theContract.methods._saleIsActive.call().call().then(function (res) { return res.toString() }) 
  return SaleActive;
};

export const loadBalanceContract = async () => { 
  const balanceContractWei = await web3.eth.getBalance(contractAddress).then(function (res) { return res.toString() }) 
  const balanceContract = web3.utils.fromWei(balanceContractWei, 'ether');
  return balanceContract;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};



export const mint = async (amount) => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
  const transactionParameters = {
   'from': window.ethereum.selectedAddress,
   'to': contractAddress,
   value: web3.utils.toHex(price*amount),
   data: theContract.methods.mint(amount).encodeABI(), 
 };
 try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
   return {
     success: true,
     status:
       "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
       txHash,
   };
 } catch (error) {
   return {
     success: false,
     status: "😥 Something went wrong: " + error.message,
   };
 }
}

export const preSaleMint = async (PreSaleAmount) => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
  const transactionParameters = {
   'from': window.ethereum.selectedAddress,
   'to': contractAddress,
   value: web3.utils.toHex(presaleprice*PreSaleAmount),
   data: theContract.methods.preSaleMint(PreSaleAmount).encodeABI(), 
 };
 try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
   return {
     success: true,
     status:
       "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
       txHash,
   };
 } catch (error) {
   return {
     success: false,
     status: "😥 Something went wrong: " + error.message,
   };
 }
}



export const preSaleStart = async () => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
     'from': window.ethereum.selectedAddress,
     'to': contractAddress,
     data: theContract.methods.preSaleStart().encodeABI(), 
   };
   try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
     return {
       success: true,
       status:
         "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
         txHash,
     };
   } catch (error) {
     return {
       success: false,
       status: "😥 Something went wrong: " + error.message,
     };
   }
  }

  export const preSaleStop = async () => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
     'from': window.ethereum.selectedAddress,
     'to': contractAddress,
     data: theContract.methods.preSaleStop().encodeABI(), 
   };
   try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
     return {
       success: true,
       status:
         "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
         txHash,
     };
   } catch (error) {
     return {
       success: false,
       status: "😥 Something went wrong: " + error.message,
     };
   }
  }

  export const saleStart = async () => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
     'from': window.ethereum.selectedAddress,
     'to': contractAddress,
     data: theContract.methods.saleStart().encodeABI(), 
   };
   try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
     return {
       success: true,
       status:
         "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
         txHash,
     };
   } catch (error) {
     return {
       success: false,
       status: "😥 Something went wrong: " + error.message,
     };
   }
  }

  export const saleStop = async () => {
   //  window.contract = new web3.eth.Contract(contractABI, contractAddress);

    const transactionParameters = {
     'from': window.ethereum.selectedAddress,
     'to': contractAddress,
     data: theContract.methods.saleStop().encodeABI(), 
   };
   try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
     return {
       success: true,
       status:
         "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
         txHash,
     };
   } catch (error) {
     return {
       success: false,
       status: "😥 Something went wrong: " + error.message,
     };
   }
  }

  export const withdrawAll = async () => {
       //  window.contract = new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
     'from': window.ethereum.selectedAddress,
     'to': contractAddress,
     data: theContract.methods.withdrawAll().encodeABI(), 
   };
   try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
     return {
       success: true,
       status:
         "✅ Check out your transaction on Etherscan: https://etherscan.io/tx/" +
         txHash,
     };
   } catch (error) {
     return {
       success: false,
       status: "😥 Something went wrong: " + error.message,
     };
   }
  }



  