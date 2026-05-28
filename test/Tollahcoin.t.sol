// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {Tollahcoin} from "../contracts/Tollahcoin.sol";

contract TokenHolder {
    function send(Tollahcoin token, address to, uint256 amount) external {
        require(token.transfer(to, amount), "holder transfer failed");
    }
}

contract TollahcoinTest {
    address private constant ALICE = address(0xA11CE);

    Tollahcoin private token;

    function setUp() public {
        token = new Tollahcoin(address(this));
    }

    function test_MetadataMatchesPublicDocs() public view {
        require(keccak256(bytes(token.name())) == keccak256("tollahcoin"), "wrong name");
        require(keccak256(bytes(token.symbol())) == keccak256("IRAN"), "wrong symbol");
        require(token.decimals() == 18, "wrong decimals");
    }

    function test_InitialSupplyIsFixedAndAssignedToTreasury() public view {
        require(token.totalSupply() == token.INITIAL_SUPPLY(), "wrong total supply");
        require(token.balanceOf(address(this)) == token.INITIAL_SUPPLY(), "treasury not funded");
    }

    function test_TransfersHaveNoTax() public {
        uint256 amount = 1_000 * 1e18;
        uint256 treasuryBefore = token.balanceOf(address(this));

        require(token.transfer(ALICE, amount), "transfer failed");

        require(token.balanceOf(ALICE) == amount, "recipient did not receive full amount");
        require(token.balanceOf(address(this)) == treasuryBefore - amount, "treasury charged extra");
        require(token.totalSupply() == token.INITIAL_SUPPLY(), "supply changed");
    }

    function test_TransfersBetweenHoldersHaveNoTax() public {
        TokenHolder holder = new TokenHolder();
        uint256 amount = 1_000 * 1e18;
        uint256 secondTransfer = 250 * 1e18;

        require(token.transfer(address(holder), amount), "initial transfer failed");

        holder.send(token, ALICE, secondTransfer);

        require(token.balanceOf(address(holder)) == amount - secondTransfer, "sender charged extra");
        require(token.balanceOf(ALICE) == secondTransfer, "recipient charged tax");
        require(token.totalSupply() == token.INITIAL_SUPPLY(), "supply changed");
    }

    function test_RevertsForZeroTreasury() public {
        try new Tollahcoin(address(0)) {
            revert("zero treasury deployment succeeded");
        } catch (bytes memory) {
            require(true, "expected revert");
        }
    }
}
