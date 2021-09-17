module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
  
    const { deployer } = await getNamedAccounts()

    const dtc = (await deployments.get("DTC")).address;

    const marketDeploy = await deploy("Market", {
      from: deployer,
      args: [dtc],
      log: true
    })

    if (marketDeploy.newlyDeployed) {
        console.log("newlyDeployed")
        const dnc = (await deployments.get("Domino")).address;
        const market = await ethers.getContract("Market")
        await market.addWhiteList(dnc)
        console.log("dnc set white list")
      }

  }
  
  module.exports.tags = ["Market"]
  module.exports.dependencies = ["DTC","Domino"];