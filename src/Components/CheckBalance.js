import Web3 from 'web3';

const CheckBalance = () => {
    const web3 = new Web3(Web3.givenProvider);
    const address = '0x1234567890123456789012345678901234567890';
    
    const getBalance=async()=>{
        const balance=await web3.eth.getBalance(address)
        const etherAmount = web3.utils.fromWei(balance, 'ether');
        //convert to ether
        
        console.log(etherAmount)
    }


  return (
    <div>
       <button onClick={getBalance}>
        CheckBalance
        </button> 
        </div>
  )
}

export default CheckBalance