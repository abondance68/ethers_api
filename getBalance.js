import chalk from 'chalk'; 
import {ethers,  Signer } from 'ethers'; 
import { formatEther } from 'ethers/lib/utils';
import 'dotenv/config';



const daiAddress = "dai.tokens.ethers.eth";
function logIt(value){
    console.log(chalk.green(value));
}

const ETH_MAINNET_RPC_URL = process.env.ETH_MAINNET_RPC_URL;
(async() => {
const provider = new ethers.providers.JsonRpcProvider(ETH_MAINNET_RPC_URL)
   
     
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
    //const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
    //const balance = await daiContract.balanceOf("ricmoo.eth");
    const balance = await provider.getBalance("ricmoo.eth");
logIt(balance);



})();