import "dotenv/config"
import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import "hardhat-abi-exporter"
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import { HardhatUserConfig } from "hardhat/types"


console.log(process.env.INFURA_API_KEY)

const account = process.env.PRIVATE_KEY as any;

const config: HardhatUserConfig =  {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 20000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [account],
      chainId: 1,
    },
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ["local"],
    },
    hardhat: {
      forking: {
        enabled: process.env.FORKING === "true",
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      },
      live: false,
      saveDeployments: true,
      tags: ["test", "local"],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [account],
      chainId: 3,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [account],
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [account],
      chainId: 5,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [account],
      chainId: 42,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 20000000000,
      gasMultiplier: 2,
    },
    moonbase: {
      url: "https://rpc.testnet.moonbeam.network",
      accounts: [account],
      chainId: 1287,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: 5198000,
      gasMultiplier: 2,
    },
    fantom: {
      url: "https://rpcapi.fantom.network",
      accounts: [account],
      chainId: 250,
      live: true,
      saveDeployments: true,
      gasPrice: 22000000000,
    },
    "fantom-testnet": {
      url: "https://rpc.testnet.fantom.network",
      accounts: [account],
      chainId: 4002,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [account],
      chainId: 137,
      live: true,
      saveDeployments: true,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [account],
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    xdai: {
      url: "https://rpc.xdaichain.com",
      accounts: [account],
      chainId: 100,
      live: true,
      saveDeployments: true,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [account],
      chainId: 56,
      live: true,
      saveDeployments: true,
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts: [account],
      chainId: 97,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    heco: {
      url: "https://http-mainnet.hecochain.com",
      accounts: [account],
      chainId: 128,
      live: true,
      saveDeployments: true,
    },
    "heco-testnet": {
      url: "https://http-testnet.hecochain.com",
      accounts: [account],
      chainId: 256,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [account],
      chainId: 43114,
      live: true,
      saveDeployments: true,
      gasPrice: 470000000000,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [account],
      chainId: 43113,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    harmony: {
      url: "https://api.s0.t.hmny.io",
      accounts: [account],
      chainId: 1666600000,
      live: true,
      saveDeployments: true,
    },
    "harmony-testnet": {
      url: "https://api.s0.b.hmny.io",
      accounts: [account],
      chainId: 1666700000,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    okex: {
      url: "https://exchainrpc.okex.org",
      accounts: [account],
      chainId: 66,
      live: true,
      saveDeployments: true,
    },
    "okex-testnet": {
      url: "https://exchaintestrpc.okex.org",
      accounts: [account],
      chainId: 65,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [account],
      chainId: 42161,
      live: true,
      saveDeployments: true,
      blockGasLimit: 700000,
    },
    "arbitrum-testnet": {
      url: "https://kovan3.arbitrum.io/rpc",
      accounts: [account],
      chainId: 79377087078960,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [account],
      chainId: 42220,
      live: true,
      saveDeployments: true,
    },
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  }
}
export default config
