(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Ballot","sourceName":"contracts/Ballot.sol","abi":[{"inputs":[{"internalType":"bytes32[]","name":"proposalNames","type":"bytes32[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"voteValue","type":"uint256"}],"name":"newVote","type":"event"},{"inputs":[],"name":"chairperson","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllProposals","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"internalType":"struct Ballot.Proposal[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposal","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"vote","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winnerName","outputs":[{"internalType":"bytes32","name":"winnerName_","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winningProposal","outputs":[{"internalType":"uint256","name":"winningProposal_","type":"uint256"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b50604051620017d8380380620017d883398181016040528101906200003791906200025b565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200019a576002604051806040016040528084848151811062000133577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080620001919062000342565b915050620000e2565b505062000419565b6000620001b9620001b384620002c9565b620002a0565b90508083825260208201905082856020860282011115620001d957600080fd5b60005b858110156200020d5781620001f2888262000244565b845260208401935060208301925050600181019050620001dc565b5050509392505050565b600082601f8301126200022957600080fd5b81516200023b848260208601620001a2565b91505092915050565b6000815190506200025581620003ff565b92915050565b6000602082840312156200026e57600080fd5b600082015167ffffffffffffffff8111156200028957600080fd5b620002978482850162000217565b91505092915050565b6000620002ac620002bf565b9050620002ba82826200030c565b919050565b6000604051905090565b600067ffffffffffffffff821115620002e757620002e6620003bf565b5b602082029050602081019050919050565b6000819050919050565b6000819050919050565b6200031782620003ee565b810181811067ffffffffffffffff82111715620003395762000338620003bf565b5b80604052505050565b60006200034f8262000302565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000385576200038462000390565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200040a81620002f8565b81146200041657600080fd5b50565b6113af80620004296000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063609ff1bd11610066578063609ff1bd1461011f5780639e7b8d611461013d578063a3ec138d14610159578063cceb68f51461018c578063e2ba53f0146101aa57610093565b80630121b93f14610098578063013cf08b146100b45780632e4176cf146100e55780635c19a95c14610103575b600080fd5b6100b260048036038101906100ad9190610c95565b6101c8565b005b6100ce60048036038101906100c99190610c95565b61036e565b6040516100dc929190610f33565b60405180910390f35b6100ed6103a2565b6040516100fa9190610eb2565b60405180910390f35b61011d60048036038101906101189190610c6c565b6103c6565b005b610127610788565b604051610134919061103c565b60405180910390f35b61015760048036038101906101529190610c6c565b61085c565b005b610173600480360381019061016e9190610c6c565b610a13565b6040516101839493929190611057565b60405180910390f35b610194610a70565b6040516101a19190610ef6565b60405180910390f35b6101b2610bcb565b6040516101bf9190610f18565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001541415610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a90610f5c565b60405180910390fd5b8060010160009054906101000a900460ff16156102a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029c90610f7c565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055507f1a6a8a65ed2c2326ce1bbc6781faf147de39c5f1853c8ae35e2ef13d60b76b6233836040516102fc929190610ecd565b60405180910390a1806000015460028381548110610343577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101600082825461036391906110e6565b925050819055505050565b6002818154811061037e57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045290610f9c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156104ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c19061101c565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461063a57600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90610fdc565b60405180910390fd5b6104cb565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156107635781600001546002826002015481548110610737577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101600082825461075791906110e6565b92505081905550610783565b816000015481600001600082825461077b91906110e6565b925050819055505b505050565b6000806000905060005b6002805490508110156108575781600282815481106107da577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101541115610844576002818154811061082c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016001015491508092505b808061084f9061118e565b915050610792565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e190610fbc565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561097a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097190610ffc565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154146109c957600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b6060600060028054905067ffffffffffffffff811115610ab9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610af257816020015b610adf610c25565b815260200190600190039081610ad75790505b50905060005b600280549050811015610bc35760028181548110610b3f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050828281518110610ba5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508080610bbb9061118e565b915050610af8565b508091505090565b60006002610bd7610788565b81548110610c0e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160000154905090565b604051806040016040528060008019168152602001600081525090565b600081359050610c518161134b565b92915050565b600081359050610c6681611362565b92915050565b600060208284031215610c7e57600080fd5b6000610c8c84828501610c42565b91505092915050565b600060208284031215610ca757600080fd5b6000610cb584828501610c57565b91505092915050565b6000610cca8383610e65565b60408301905092915050565b610cdf8161113c565b82525050565b6000610cf0826110ac565b610cfa81856110c4565b9350610d058361109c565b8060005b83811015610d36578151610d1d8882610cbe565b9750610d28836110b7565b925050600181019050610d09565b5085935050505092915050565b610d4c8161114e565b82525050565b610d5b8161115a565b82525050565b610d6a8161115a565b82525050565b6000610d7d6014836110d5565b9150610d8882611206565b602082019050919050565b6000610da0600e836110d5565b9150610dab8261122f565b602082019050919050565b6000610dc36012836110d5565b9150610dce82611258565b602082019050919050565b6000610de66028836110d5565b9150610df182611281565b604082019050919050565b6000610e096019836110d5565b9150610e14826112d0565b602082019050919050565b6000610e2c6018836110d5565b9150610e37826112f9565b602082019050919050565b6000610e4f601e836110d5565b9150610e5a82611322565b602082019050919050565b604082016000820151610e7b6000850182610d52565b506020820151610e8e6020850182610e94565b50505050565b610e9d81611184565b82525050565b610eac81611184565b82525050565b6000602082019050610ec76000830184610cd6565b92915050565b6000604082019050610ee26000830185610cd6565b610eef6020830184610ea3565b9392505050565b60006020820190508181036000830152610f108184610ce5565b905092915050565b6000602082019050610f2d6000830184610d61565b92915050565b6000604082019050610f486000830185610d61565b610f556020830184610ea3565b9392505050565b60006020820190508181036000830152610f7581610d70565b9050919050565b60006020820190508181036000830152610f9581610d93565b9050919050565b60006020820190508181036000830152610fb581610db6565b9050919050565b60006020820190508181036000830152610fd581610dd9565b9050919050565b60006020820190508181036000830152610ff581610dfc565b9050919050565b6000602082019050818103600083015261101581610e1f565b9050919050565b6000602082019050818103600083015261103581610e42565b9050919050565b60006020820190506110516000830184610ea3565b92915050565b600060808201905061106c6000830187610ea3565b6110796020830186610d43565b6110866040830185610cd6565b6110936060830184610ea3565b95945050505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006110f182611184565b91506110fc83611184565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611131576111306111d7565b5b828201905092915050565b600061114782611164565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061119982611184565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111cc576111cb6111d7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b6113548161113c565b811461135f57600080fd5b50565b61136b81611184565b811461137657600080fd5b5056fea2646970667358221220e10fe2de6adf58bce2f523f2d07d31e536f8c489fcba639838ddd86f3a1dddb664736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063609ff1bd11610066578063609ff1bd1461011f5780639e7b8d611461013d578063a3ec138d14610159578063cceb68f51461018c578063e2ba53f0146101aa57610093565b80630121b93f14610098578063013cf08b146100b45780632e4176cf146100e55780635c19a95c14610103575b600080fd5b6100b260048036038101906100ad9190610c95565b6101c8565b005b6100ce60048036038101906100c99190610c95565b61036e565b6040516100dc929190610f33565b60405180910390f35b6100ed6103a2565b6040516100fa9190610eb2565b60405180910390f35b61011d60048036038101906101189190610c6c565b6103c6565b005b610127610788565b604051610134919061103c565b60405180910390f35b61015760048036038101906101529190610c6c565b61085c565b005b610173600480360381019061016e9190610c6c565b610a13565b6040516101839493929190611057565b60405180910390f35b610194610a70565b6040516101a19190610ef6565b60405180910390f35b6101b2610bcb565b6040516101bf9190610f18565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001541415610253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024a90610f5c565b60405180910390fd5b8060010160009054906101000a900460ff16156102a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029c90610f7c565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055507f1a6a8a65ed2c2326ce1bbc6781faf147de39c5f1853c8ae35e2ef13d60b76b6233836040516102fc929190610ecd565b60405180910390a1806000015460028381548110610343577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101600082825461036391906110e6565b925050819055505050565b6002818154811061037e57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045290610f9c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156104ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c19061101c565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461063a57600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90610fdc565b60405180910390fd5b6104cb565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156107635781600001546002826002015481548110610737577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101600082825461075791906110e6565b92505081905550610783565b816000015481600001600082825461077b91906110e6565b925050819055505b505050565b6000806000905060005b6002805490508110156108575781600282815481106107da577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201600101541115610844576002818154811061082c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016001015491508092505b808061084f9061118e565b915050610792565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e190610fbc565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561097a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097190610ffc565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154146109c957600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b6060600060028054905067ffffffffffffffff811115610ab9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610af257816020015b610adf610c25565b815260200190600190039081610ad75790505b50905060005b600280549050811015610bc35760028181548110610b3f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050828281518110610ba5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508080610bbb9061118e565b915050610af8565b508091505090565b60006002610bd7610788565b81548110610c0e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160000154905090565b604051806040016040528060008019168152602001600081525090565b600081359050610c518161134b565b92915050565b600081359050610c6681611362565b92915050565b600060208284031215610c7e57600080fd5b6000610c8c84828501610c42565b91505092915050565b600060208284031215610ca757600080fd5b6000610cb584828501610c57565b91505092915050565b6000610cca8383610e65565b60408301905092915050565b610cdf8161113c565b82525050565b6000610cf0826110ac565b610cfa81856110c4565b9350610d058361109c565b8060005b83811015610d36578151610d1d8882610cbe565b9750610d28836110b7565b925050600181019050610d09565b5085935050505092915050565b610d4c8161114e565b82525050565b610d5b8161115a565b82525050565b610d6a8161115a565b82525050565b6000610d7d6014836110d5565b9150610d8882611206565b602082019050919050565b6000610da0600e836110d5565b9150610dab8261122f565b602082019050919050565b6000610dc36012836110d5565b9150610dce82611258565b602082019050919050565b6000610de66028836110d5565b9150610df182611281565b604082019050919050565b6000610e096019836110d5565b9150610e14826112d0565b602082019050919050565b6000610e2c6018836110d5565b9150610e37826112f9565b602082019050919050565b6000610e4f601e836110d5565b9150610e5a82611322565b602082019050919050565b604082016000820151610e7b6000850182610d52565b506020820151610e8e6020850182610e94565b50505050565b610e9d81611184565b82525050565b610eac81611184565b82525050565b6000602082019050610ec76000830184610cd6565b92915050565b6000604082019050610ee26000830185610cd6565b610eef6020830184610ea3565b9392505050565b60006020820190508181036000830152610f108184610ce5565b905092915050565b6000602082019050610f2d6000830184610d61565b92915050565b6000604082019050610f486000830185610d61565b610f556020830184610ea3565b9392505050565b60006020820190508181036000830152610f7581610d70565b9050919050565b60006020820190508181036000830152610f9581610d93565b9050919050565b60006020820190508181036000830152610fb581610db6565b9050919050565b60006020820190508181036000830152610fd581610dd9565b9050919050565b60006020820190508181036000830152610ff581610dfc565b9050919050565b6000602082019050818103600083015261101581610e1f565b9050919050565b6000602082019050818103600083015261103581610e42565b9050919050565b60006020820190506110516000830184610ea3565b92915050565b600060808201905061106c6000830187610ea3565b6110796020830186610d43565b6110866040830185610cd6565b6110936060830184610ea3565b95945050505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006110f182611184565b91506110fc83611184565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611131576111306111d7565b5b828201905092915050565b600061114782611164565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061119982611184565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111cc576111cb6111d7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b6113548161113c565b811461135f57600080fd5b50565b61136b81611184565b811461137657600080fd5b5056fea2646970667358221220e10fe2de6adf58bce2f523f2d07d31e536f8c489fcba639838ddd86f3a1dddb664736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},37:function(f){f.exports=JSON.parse('{"Token":"0x39B1a13947F1f2357B5db78EaCbB6a496f4c3bB8"}')},44:function(f,e,b){},48:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var t=b(9),c=b.n(t),a=b(32),n=b.n(a),d=(b(44),b(2)),r=b.n(d),s=b(14),o=b(12),i=b(21),u=b(6),p=function(f){var e,b,t=f.voterAddressToCheck,c=f.setVoterAddressToCheck,a=f.checkAddressVoter,n=f.voterStatus;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Check if an address vote status"}),Object(u.jsxs)("div",{style:{width:"15em",display:"flex",justifyContent:"space-between"},children:[Object(u.jsx)("input",{value:t,onChange:function(f){c(f.target.value)}}),Object(u.jsx)("button",{onClick:a,children:"Check"})]}),"An error has occured"!==n&&n&&Object(u.jsxs)("div",{style:{paddingTop:"2em"},children:[Object(u.jsx)("h4",{children:"Voter Status"}),Object(u.jsxs)("p",{children:["Account: ",t]}),Object(u.jsxs)("p",{children:["Voted: ",null===n||void 0===n||null===(e=n.voted)||void 0===e?void 0:e.toString()]}),Object(u.jsxs)("p",{children:["Vote Weight: ",Number(null===n||void 0===n||null===(b=n.weight)||void 0===b?void 0:b._hex)]})]})," ","An error has occured"===n&&Object(u.jsx)("p",{children:n})]})},l=function(f){var e=f.proposals,b=f.voteProposal;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"proposal:"})," ",e.map((function(f,e){var t,c=function(f){var e=f.replace("-"," ");return e[0].toUpperCase()+e.substring(1)}((t=f.name,i.a.utils.parseBytes32String(t))),a=f.voteCount._hex;return Object(u.jsxs)("div",{style:{padding:"1rem 0"},children:["\ud83d\uddf3 ",c," - ",Number(a),Object(u.jsx)("button",{style:{marginLeft:"2em"},onClick:function(){return b(e)},children:"Vote"})]},e)}))]})},y=function(f){var e=f.newVoter,b=f.setNewVoter,t=f.addNewVoter,c=f.newVoterStatus;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Give right to vote"}),Object(u.jsx)("p",{children:"(only chairman can give vote right)"}),Object(u.jsxs)("div",{style:{width:"15em",display:"flex",justifyContent:"space-between"},children:[Object(u.jsx)("input",{value:e,onChange:function(f){b(f.target.value)}}),Object(u.jsx)("button",{onClick:t,children:"Give right"})]}),c&&Object(u.jsxs)("p",{children:["Status: ",c]})]})},h=b(36),j=b(37),v=function(){var f=Object(t.useState)(),e=Object(o.a)(f,2),b=e[0],c=e[1],a=Object(t.useState)(""),n=Object(o.a)(a,2),d=n[0],v=n[1],m=Object(t.useState)(""),O=Object(o.a)(m,2),x=O[0],w=O[1],g=Object(t.useState)(),T=Object(o.a)(g,2),k=T[0],C=T[1],S=Object(t.useState)(""),V=Object(o.a)(S,2),N=V[0],A=V[1],B=Object(t.useState)([]),M=Object(o.a)(B,2),P=M[0],E=M[1],F=Object(t.useState)(""),_=Object(o.a)(F,2),J=_[0],L=_[1],R=Object(t.useState)(0),G=Object(o.a)(R,2),I=G[0],W=G[1],D=Object(t.useState)(!1),U=Object(o.a)(D,2),Y=U[0],q=U[1];function z(){return H.apply(this,arguments)}function H(){return(H=Object(s.a)(r.a.mark((function f(){return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,K();case 2:case"end":return f.stop()}}),f)})))).apply(this,arguments)}var K=function(){var f=Object(s.a)(r.a.mark((function f(){var e,b,t,a,n;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return e=new i.a.providers.Web3Provider(window.ethereum),b=new i.a.Contract(j.Token,h.abi,e.getSigner(0)),f.next=4,b.getAllProposals();case 4:return t=f.sent,a=0,t.forEach((function(f){return a+=f.voteCount.toNumber()})),W(a),f.next=10,b.chairperson();case 10:n=f.sent,c(b),E(t),L(n);case 14:case"end":return f.stop()}}),f)})));return function(){return f.apply(this,arguments)}}();function Q(){return(Q=Object(s.a)(r.a.mark((function f(){var e,b;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,window.ethereum.enable();case 2:e=f.sent,b=Object(o.a)(e,1),z(b[0]);case 6:case"end":return f.stop()}}),f)})))).apply(this,arguments)}function X(f){return Z.apply(this,arguments)}function Z(){return(Z=Object(s.a)(r.a.mark((function f(e){var t,c;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,b.getAllProposals();case 2:t=f.sent,c=0,t.forEach((function(f){return c+=f.voteCount.toNumber()})),E(t),W(c);case 7:case"end":return f.stop()}}),f)})))).apply(this,arguments)}Object(t.useEffect)((function(){!function(){Q.apply(this,arguments)}()}),[]),Object(t.useEffect)((function(){return b&&b.on("newVote",X),function(){b&&b.off("newVote",null)}}),[b]);var $=function(){var f=Object(s.a)(r.a.mark((function f(e){return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,b.vote(e);case 3:f.next=10;break;case 5:f.prev=5,f.t0=f.catch(0),console.log("error: ",f.t0.message),q(!0),setTimeout((function(){return q(!1)}),2e3);case 10:case"end":return f.stop()}}),f,null,[[0,5]])})));return function(e){return f.apply(this,arguments)}}(),ff=function(){var f=Object(s.a)(r.a.mark((function f(){var e;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,b.voters("".concat(N));case 3:e=f.sent,C(e),f.next=11;break;case 7:f.prev=7,f.t0=f.catch(0),console.log(f.t0),C("An error has occured");case 11:case"end":return f.stop()}}),f,null,[[0,7]])})));return function(){return f.apply(this,arguments)}}(),ef=function(){var f=Object(s.a)(r.a.mark((function f(){return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,b.giveRightToVote(d);case 3:w("Success"),f.next=10;break;case 6:f.prev=6,f.t0=f.catch(0),console.log(f.t0),w("An error has occured");case 10:case"end":return f.stop()}}),f,null,[[0,6]])})));return function(){return f.apply(this,arguments)}}();return Object(u.jsxs)("div",{style:{padding:"3rem 5rem"},children:[Object(u.jsx)("h1",{children:"Voting System"}),Object(u.jsxs)("p",{children:["Number Of Votee: ",I]}),Y?Object(u.jsx)("p",{style:{height:32,color:"red"},children:"You probably already voted"}):Object(u.jsx)("p",{style:{height:32}}),Object(u.jsx)("div",{children:Object(u.jsxs)("h4",{children:["chairperson: ",J]})}),Object(u.jsx)(l,{proposals:P,voteProposal:$}),Object(u.jsx)(y,{addNewVoter:ef,setNewVoter:v,newVoter:d,newVoterStatus:x}),Object(u.jsx)(p,{voterAddressToCheck:N,setVoterAddressToCheck:A,checkAddressVoter:ff,voterStatus:k})]})},m=function(f){f&&f instanceof Function&&b.e(3).then(b.bind(null,60)).then((function(e){var b=e.getCLS,t=e.getFID,c=e.getFCP,a=e.getLCP,n=e.getTTFB;b(f),t(f),c(f),a(f),n(f)}))};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),m()}},[[58,1,2]]]);
//# sourceMappingURL=main.febd9886.chunk.js.map