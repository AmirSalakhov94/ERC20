// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.15;

import "./IERC20.sol";

contract ERC20 is IERC20 {

    address private owner;
    string public name;
    string public symbol;
    uint8 public decimals;

    uint override public totalSupply;
    mapping(address => uint) override public balanceOf;
    mapping(address => mapping(address => uint)) override public allowance;

    function transfer(address recipient, uint amount) override external returns (bool) {
        require(balanceOf[msg.sender]>=amount, "Insufficient Balance"); 

        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) override external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) override external returns (bool) {

        require(balanceOf[sender] >= amount && allowance[sender][msg.sender] >= amount);

        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(uint amount) external {
        require(owner == msg.sender, "access denied");

        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        require(owner == msg.sender, "access denied");

        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }

    constructor(address _owner, string memory _name, string memory _symbol, uint8 _decimals) {
        owner = _owner;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }
}

