# How?

This challenge requires us to know how Ethereum stores state variables in its storage. 

These are the state variables, in the exact order: 

bool public locked = true;
uint256 public ID = block.timestamp;
uint8 private flattening = 10;
uint8 private denomination = 255;
uint16 private awkwardness = uint16(block.timestamp);
bytes32[3] private data;

Now, solidity documentation explains that to save space, if multiple variables declared together occupy less than 32 bytes, we can push them together to one storage slot. Ethereum contract storage basially has many slots, which should be around 2^256 + 1 0-indexed slots occupying 32 bytes each. 

The boolean 'locked' only occupies 1 byte, but it is not declared near any other variable which is less then 32 bytes and hence occupies one slot all by itself. uint256 occupies 32 bytes, so one slot goes to it. The variables flattening, denomination and awkwardness combine to occupy 32 bytes and only need one storage slot. We have occupied 3 slots till now. Each bytes32 needs 32 bytes, so each member of the array in bytes32[3] data needs a slot. This would mean data[2], which is the password, would be in slot 3+3 = 6th slot. Since it is 0-indexed, the slot number is 5. 

We run commands that we know already: 

v = (await web3.eth.getStorageAt('0x7c8f37d7D49B9b08C4B049E1481cc6C9f61078fA',5,(e,v)=> {return v}))

v contains the bytes32 password. However, the password is bytes16 and hence we need to convert it. How do you type cast bytes32 to the smaller bytes16? Ez! Just cut 16 bytes off. The string is 66 characters long-> 0x needs 2, then each hexadecimal needs 2. So, we convert v to bytes16 by: 

v = v.slice(0,34)

Now we can go ahead and unlock: 

await contract.unlock(v)


  