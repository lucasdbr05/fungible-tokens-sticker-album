import { ethers } from "hardhat";

async function main() {
  const Swap = await ethers.getContractFactory("ERC1155SignedSwap");
  const swap = await Swap.deploy();

  await swap.waitForDeployment();

  console.log("✅ ERC1155Swap deployed at:", await swap.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
