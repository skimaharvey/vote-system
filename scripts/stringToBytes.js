const ethers = require('ethers');


async function stringToBytes(args) {
 const name = args[0];
 const bytes = ethers.utils.formatBytes32String(name);
 console.log('Bytes:', bytes);
 return bytes
}

export default stringToBytes