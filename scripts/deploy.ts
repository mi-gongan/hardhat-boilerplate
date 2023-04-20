import { ethers, upgrades } from "hardhat";

async function main() {
  const token = await ethers.getContractFactory("FactoryName");

  const ContractName = await upgrades.deployProxy(token, []);
  await ContractName.deployed();

  console.log("ContractName deployed to:", ContractName.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
