// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title tollahcoin ($IRAN)
/// @notice Fixed-supply ERC-20 for a transparent Polygon community token.
/// @dev No owner-only minting, pausing, blacklisting, or transfer-tax logic is included.
contract Tollahcoin is ERC20 {
    uint256 public constant INITIAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    error InvalidTreasury();

    constructor(address treasury) ERC20("tollahcoin", "IRAN") {
        if (treasury == address(0)) {
            revert InvalidTreasury();
        }

        _mint(treasury, INITIAL_SUPPLY);
    }
}
