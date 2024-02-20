
const hre = require("hardhat");

async function main() {
  const votingContract = await hre.ethers.getContractFactory("Voting");
  const deployedVotingContract = await votingContract.deploy();
  console.log(`Contract Address deployed: ${deployedVotingContract.target}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Contract Address deployed: 0x6aEcA373802594CedAcA96a217eF198f75BDA397
// https://sepolia.etherscan.io/address/0x6aEcA373802594CedAcA96a217eF198f75BDA397#code