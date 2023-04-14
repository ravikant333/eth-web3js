import logo from './logo.svg';
import './App.css';
import ContractCall from './Components/ContractCall';
import Home from './Components/WalletConnect';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function App() {
  async function getLibrary(provider) {
    await window.web3.currentProvider.enable();
    return new Web3(window.web3.currentProvider);
    return new Web3(provider)
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="App">
    {/* <CheckBalance/> */}
    <Home/>
    <ContractCall/>
    </div>
    </Web3ReactProvider>
  );
}

export default App;
