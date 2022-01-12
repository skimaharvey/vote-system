
async function stringToBytes(string) {
	const bytes = ethers.utils.formatBytes32String(string);
	console.log('Bytes:', bytes);
	return bytes
   }

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	console.log('Account balance:', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('Ballot');
	const token = await Token.deploy([
		await stringToBytes('Porsche'),
		await stringToBytes('Ferrari'),
		await stringToBytes('Bugatti'),
		await stringToBytes('Audi'),
	]);

	console.log('Token address:', token.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});