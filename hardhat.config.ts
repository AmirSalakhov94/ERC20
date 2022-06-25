/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'dotenv/config';
import '@nomiclabs/hardhat-etherscan';

import './tasks/balance';
import './tasks/transfer';
import './tasks/transferFrom';
import './tasks/approve';

module.exports = {
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: "0.8.15",
  
    networks: {
      hardhat: {
        chainId: 1337,
      },
      rinkeby: {
        url: process.env.DEPLOY_KEY_RINKEBY,
        accounts: [process.env.DEPLOY_ACC_RINKEBY],
      }
   },
   etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
