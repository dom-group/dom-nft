const ethers = require('ethers');
const {BN} = require('bn.js');

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
  
    const { deployer } = await getNamedAccounts()

    const dtc = (await deployments.get("DTC")).address;


    const price = "1.0";


    let priceBig = ethers.utils.parseUnits(price,18);
    await deploy("Domino", {
      from: deployer,
      args: ["Dom nft coin","DNC",dtc, priceBig],
      log: true,
    })
  }
  
  module.exports.tags = ["DNC"]
  module.exports.dependencies = ["DTC"];