require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
//task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
 // const accounts = await hre.ethers.getSigners();

//  for (const account of accounts) {
 //   console.log(account.address);
//  }
// });
const KEY1 = process.env["Key1"];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4", 
  networks: {
       ropsten: {
                    url: "https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa",
                    accounts: [`0x${KEY1}`]
}
}

};
