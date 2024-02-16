pragma solidity ^0.5.12;

contract Election {

    // This function returns the balance of a given address.
    function getOwnerBalance(address accountAddress) external view returns (uint) {
        return accountAddress.balance;
    }

}
