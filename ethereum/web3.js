import Web3 from 'web3'
// window.web3 = new Web3(window.ethereum);
// window.ethereum.enable();
// let web3 = new Web3(window.web3)
let web3;
 
if(typeof window!=='undefined' ){
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    web3 = new Web3(window.web3)

}else{
    const provider=new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/d3e6bb5005cd43458feebc0d2252eddb'
    )
    web3=new Web3(provider)
}
export default web3