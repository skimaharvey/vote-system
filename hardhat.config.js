require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const {INFURA_URL, PRIVATE_KEY} = process.env
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};