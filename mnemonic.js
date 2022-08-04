

// Get a wallet address from a mnemonic phrase 
import {ethers} from 'ethers'; 
var mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
var wallet = new ethers.Wallet.fromMnemonic(mnemonic);


function logit(value) { 
    console.log(value); 
 }
logit("Address: " + wallet.address);
// "Address: 0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9"
 
