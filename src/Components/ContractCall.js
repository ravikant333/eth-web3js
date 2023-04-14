import Contract from 'web3-eth-contract';
import { ABI } from '../ABI';
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core"
import { useState } from 'react';

const enableApp=async()=>{
  await window.ethereum.enable();
  await window.web3.currentProvider.enable();
}

const ContractCall = () => {
 
  const {  account,library } = useWeb3React()
 
    const contractAddress = '0x3f13F49f3777aDed0DeeC1BA0f72B0eF1A8E4722';
    const contract = new Contract(ABI, contractAddress); //contract instanse
   console.log(contract)
    const getLae=async()=>{
    
     const val= await library
     console.log(val)
     }

   getLae()
    const storeNumber=async()=>{
      const web3= await library
        const accounts = await web3.eth.getAccounts()
        await contract.currentProvider.enable()
        console.log(accounts)

        const txn1=await contract.methods.getNumber().call()
        console.log(txn1)
        // const txn=await contract.methods.storeNumber(5).send({from:account})
        // console.log(txn)
    }

  return (
    <div>
        <button onClick={storeNumber}>Store Number</button>
    </div>
  )
}

export default ContractCall