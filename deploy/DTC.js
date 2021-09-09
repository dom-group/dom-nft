module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
  
    const { deployer } = await getNamedAccounts()
  
    await deploy("DTC", {
      from: deployer,
      args: ["Dom test coin","DTC"],
      log: true,
    })
  }
  
  module.exports.tags = ["DTC"]