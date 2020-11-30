const HDWalletProvider= require('truffle-hdwallet-provider')
const Web3=require('web3')
const compiledFactory = require('./build/CampaignFactory.json')
const compiledCampaign = require('./build/Campaign.json')
const provider  = new HDWalletProvider(
    'inject aunt exist reveal luxury please trophy virtual witness ship job bone',
    'https://rinkeby.infura.io/v3/d3e6bb5005cd43458feebc0d2252eddb'
)
const web3= new Web3(provider)
const deploy= async ()=>{
    try{
        const accounts= await web3.eth.getAccounts();
        console.log(accounts)
        console.log("Attempting to deploy ",accounts[0]);
        const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({data:compiledFactory.bytecode})
            .send({gas:'1000000',from:accounts[0]})
        console.log('Contract deployed to',result.options.address)
       
    }
    catch(e){
        console.log(e);
    }
    
}
deploy();
 