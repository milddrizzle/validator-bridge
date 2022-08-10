const PORT = 4000;

const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "receiver",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensWrapped",
    type: "event",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "receiver",
        type: "string",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "encode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "x",
        type: "bytes",
      },
    ],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageHash",
        type: "bytes32",
      },
    ],
    name: "hashEthMsg",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const BYTE_CODE = "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3611623806100bb6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063aa1e84de11610071578063aa1e84de1461013e578063b2bdfa7b1461016e578063bfe07da61461018c578063d48bfca7146101a8578063e9aef01b146101c4578063f2fde38b146101f4576100a9565b806312a9374a146100ae5780635fa7b584146100de578063715018a6146100fa5780638da5cb5b146101045780639386ce2b14610122575b600080fd5b6100c860048036038101906100c39190610eac565b610210565b6040516100d5919061118b565b60405180910390f35b6100f860048036038101906100f39190610cef565b610240565b005b610102610329565b005b61010c610475565b60405161011991906110cb565b60405180910390f35b61013c60048036038101906101379190610df2565b61049e565b005b61015860048036038101906101539190610ed9565b610714565b604051610165919061118b565b60405180910390f35b610176610725565b60405161018391906110cb565b60405180910390f35b6101a660048036038101906101a19190610d1c565b610749565b005b6101c260048036038101906101bd9190610cef565b6108d1565b005b6101de60048036038101906101d99190610d8b565b6109b9565b6040516101eb91906111eb565b60405180910390f35b61020e60048036038101906102099190610cef565b6109eb565b005b60008160405160200161022391906110a5565b604051602081830303815290604052805190602001209050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c59061124d565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ae9061124d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006104ac878787336109b9565b905060006104b982610714565b90506104c481610210565b90506000600182878787604051600081526020016040526040516104eb94939291906111a6565b6020604051602081039080840390855afa15801561050d573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156105885750610559610475565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6105c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be9061122d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156106365750610607610475565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c9061122d565b60405180910390fd5b60008990508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338b6040518363ffffffff1660e01b81526004016106b592919061111d565b602060405180830381600087803b1580156106cf57600080fd5b505af11580156106e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107079190610e7f565b5050505050505050505050565b600081805190602001209050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60011515600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d39061126d565b60405180910390fd5b60008390508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b815260040161081e939291906110e6565b602060405180830381600087803b15801561083857600080fd5b505af115801561084c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108709190610e7f565b508282604051610880919061108e565b60405180910390208573ffffffffffffffffffffffffffffffffffffffff167fa1cea84c3651d7ad0249918f31f1b68bdef6e1be41cebab5ffe654e4ff86e40760405160405180910390a450505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461095f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109569061124d565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6060848484846040516020016109d29493929190611146565b6040516020818303038152906040529050949350505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a709061124d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae09061120d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000610bb9610bb4846112b2565b61128d565b905082815260208101848484011115610bd557610bd4611467565b5b610be08482856113b6565b509392505050565b6000610bfb610bf6846112e3565b61128d565b905082815260208101848484011115610c1757610c16611467565b5b610c228482856113b6565b509392505050565b600081359050610c398161157a565b92915050565b600081519050610c4e81611591565b92915050565b600081359050610c63816115a8565b92915050565b600082601f830112610c7e57610c7d611462565b5b8135610c8e848260208601610ba6565b91505092915050565b600082601f830112610cac57610cab611462565b5b8135610cbc848260208601610be8565b91505092915050565b600081359050610cd4816115bf565b92915050565b600081359050610ce9816115d6565b92915050565b600060208284031215610d0557610d04611471565b5b6000610d1384828501610c2a565b91505092915050565b600080600060608486031215610d3557610d34611471565b5b6000610d4386828701610c2a565b9350506020610d5486828701610cc5565b925050604084013567ffffffffffffffff811115610d7557610d7461146c565b5b610d8186828701610c97565b9150509250925092565b60008060008060808587031215610da557610da4611471565b5b6000610db387828801610c2a565b9450506020610dc487828801610cc5565b9350506040610dd587828801610cc5565b9250506060610de687828801610c2a565b91505092959194509250565b60008060008060008060c08789031215610e0f57610e0e611471565b5b6000610e1d89828a01610c2a565b9650506020610e2e89828a01610cc5565b9550506040610e3f89828a01610cc5565b9450506060610e5089828a01610cda565b9350506080610e6189828a01610c54565b92505060a0610e7289828a01610c54565b9150509295509295509295565b600060208284031215610e9557610e94611471565b5b6000610ea384828501610c3f565b91505092915050565b600060208284031215610ec257610ec1611471565b5b6000610ed084828501610c54565b91505092915050565b600060208284031215610eef57610eee611471565b5b600082013567ffffffffffffffff811115610f0d57610f0c61146c565b5b610f1984828501610c69565b91505092915050565b610f2b81611357565b82525050565b610f3a81611375565b82525050565b610f51610f4c82611375565b611429565b82525050565b6000610f6282611314565b610f6c818561132a565b9350610f7c8185602086016113c5565b610f8581611476565b840191505092915050565b6000610f9b8261131f565b610fa5818561134c565b9350610fb58185602086016113c5565b80840191505092915050565b6000610fce601c8361134c565b9150610fd982611487565b601c82019050919050565b6000610ff160268361133b565b9150610ffc826114b0565b604082019050919050565b600061101460128361133b565b915061101f826114ff565b602082019050919050565b600061103760208361133b565b915061104282611528565b602082019050919050565b600061105a60128361133b565b915061106582611551565b602082019050919050565b6110798161139f565b82525050565b611088816113a9565b82525050565b600061109a8284610f90565b915081905092915050565b60006110b082610fc1565b91506110bc8284610f40565b60208201915081905092915050565b60006020820190506110e06000830184610f22565b92915050565b60006060820190506110fb6000830186610f22565b6111086020830185610f22565b6111156040830184611070565b949350505050565b60006040820190506111326000830185610f22565b61113f6020830184611070565b9392505050565b600060808201905061115b6000830187610f22565b6111686020830186611070565b6111756040830185611070565b6111826060830184610f22565b95945050505050565b60006020820190506111a06000830184610f31565b92915050565b60006080820190506111bb6000830187610f31565b6111c8602083018661107f565b6111d56040830185610f31565b6111e26060830184610f31565b95945050505050565b600060208201905081810360008301526112058184610f57565b905092915050565b6000602082019050818103600083015261122681610fe4565b9050919050565b6000602082019050818103600083015261124681611007565b9050919050565b600060208201905081810360008301526112668161102a565b9050919050565b600060208201905081810360008301526112868161104d565b9050919050565b60006112976112a8565b90506112a382826113f8565b919050565b6000604051905090565b600067ffffffffffffffff8211156112cd576112cc611433565b5b6112d682611476565b9050602081019050919050565b600067ffffffffffffffff8211156112fe576112fd611433565b5b61130782611476565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006113628261137f565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b838110156113e35780820151818401526020810190506113c8565b838111156113f2576000848401525b50505050565b61140182611476565b810181811067ffffffffffffffff821117156114205761141f611433565b5b80604052505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c6964205369676e6174757265210000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f556e737570706f7274656420746f6b656e210000000000000000000000000000600082015250565b61158381611357565b811461158e57600080fd5b50565b61159a81611369565b81146115a557600080fd5b50565b6115b181611375565b81146115bc57600080fd5b50565b6115c88161139f565b81146115d357600080fd5b50565b6115df816113a9565b81146115ea57600080fd5b5056fea264697066735822122030473d6980c75305bbbd374d5f0d8dc92e3a3525be1cc89e9031c2a7a772aab464736f6c63430008070033";

const CONTRACT_ADDRESS = "0x03FB21c081A14D802e50A6bDDbE23c800421395F"

export { PORT, ABI, BYTE_CODE, CONTRACT_ADDRESS };
