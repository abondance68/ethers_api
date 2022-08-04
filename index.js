
import { ethers } from 'ethers';
var Wallet =ethers.Wallet;
var utils = ethers.utils;
var providers = ethers.providers; 

function logit(value) { 
	console.log(value); 
 }


var privateKey ="0x0123456789012345678901234567890123456789012345678901234567890123";

var wallet = new Wallet(privateKey); 
logit(`Address :  ${wallet.address} `); 

//var transaction = { 
//	nonce: 0, 
//	gasLimit : 21000,
	//gasPrice: utils.bigNumberify("20000000000"),

//	to : "0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290",

//	value: utils.parseEther("1.0"),
//	data: "0x",

	// This ensure the data that not be replayed on different networks

// };

 
 


 
