import Web3 from 'web3';

const InstansingWeb3 = () => {

    const web3 = new Web3(Web3.givenProvider);
    console.log(web3)

    return (
        <div>InstansingWeb3</div>
    )
}

export default InstansingWeb3