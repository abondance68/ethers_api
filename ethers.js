import chalk from 'chalk'; // The chalk package is used to color the command line
import ethers from 'ethers';

import 'dotenv/config'; 


function logIt(value){
    console.log(chalk.red(value));
}

const ETH_MAINNET_RPC_URL = process.env.ETH_MAINNET_RPC_URL;

(async () => { 
   const provider = new ethers.providers.JsonRpcProvider(ETH_MAINNET_RPC_URL);
       
    //const blockN1 = await provider.getBlockHash(); 
    const blockN = await provider.getBlockNumber();   
  
    logIt(`The current block number is : ${blockN} `);

       

 })(); 