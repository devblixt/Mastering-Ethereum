# How

This is part of an exploit which proves that you should never rely on the condition address(this).balance == 0.

This is because even if you lock down a smart contract, you can send ether to it via other methods. Even if you have no payable receive or fallback function, another contract can self destruct and send ether to your contract. 

Another way would be to send the ether before your contract is made itself, as contract addresses are deterministic and is the rightmost 160 bits of the keccak256 hash of an RLP encoding of the sender's address and their txn nonce. A hacker can determine multiple contract addresses that the sender might make and send ether to them all to break the logic `address(this).balance == 0`.

This is where you can find more info: https://medium.com/@alexsherbuck/two-ways-to-force-ether-into-a-contract-1543c1311c56