// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DTC is ERC20 {
    constructor(string memory name_, string memory symbol_) ERC20(name_,symbol_) {
        super._mint(msg.sender,10000000000000000000000000000);
    }
}