
import chalk from 'chalk'; 
import{ethers ,  Signer } from 'ethers'; 


const daiAddress = "dai.tokens.ethers.eth";

const ETH_MAINNET_RPC_URL = process.env.ETH_MAINNET_RPC_URL;
function logIt(value){
    console.log(chalk.green(value));
}
const provider = new ethers.providers.JsonRpcProvider(
   "https://eth-mainnet.g.alchemy.com/v2/eyPKo1-QOeDKNHThtR1p9kS4PAYC7Mm4"
    );  

    const daiAbi = [
        //Some details about the token
        "function name() view returns (string)",
        "function symbol() view returns (string)",
    
        // Get the account balance
        "function balanceOf(address) view returns(uint)",
    
        // Send some of your tokesn to someone else
        "function transfer(address to, uint amount)",
    
        // An event triggered whenever anyone transfers to someone else
        "event Transfer(address indexed from, address indexed to, uint amount)",
    
    ]; 
    const signer = provider.getSigner(); 
    // The contract object
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
    myAddress= await signer.getAddress(); 
    //filterFrom = daiContract.filters.Transfer(myAddress, null);
    filterTo = daiContract.filters.Transfer(myAddress, null) ;
    
    

     
    
    (async () => {
//const daiContractName= await daiContract.name()

const balance = await daiContract.balanceOf("ricmoo.firefly.eth");
//ethers.utils.formatUnits(balance, 10)
//logIt(balance); 
const allTransfers = await daiContract.queryFilter(filterFrom, -10)
logIt(allTransfers);
//logIt(daiContractName)
logIt(myAddress);
})(); 
