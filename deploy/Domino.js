require('dotenv').config()
const ethers = require('ethers');

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
  
    const { deployer } = await getNamedAccounts()

    const dtc = (await deployments.get("DTC")).address;


    const price = "1.0";
    const feeOwner = process.env.FEE_OWNER;


    let priceBig = ethers.utils.parseUnits(price,18);
    await deploy("Domino", {
      from: deployer,
      args: ["Dom nft coin","DNC",dtc, priceBig,feeOwner],
      log: true
    })
  }
  
  module.exports.tags = ["Domino"]
  module.exports.dependencies = ["DTC"];