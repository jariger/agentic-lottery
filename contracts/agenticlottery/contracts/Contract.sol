// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AgenticLottery {
    uint256 public ticketPrice;
    uint256 public totalTickets;

    struct Ticket {
        address owner;
        bool claimed;
        uint256 prize;
    }

    mapping(uint256 => Ticket) public tickets;

    event TicketBought(uint256 indexed ticketId, address indexed buyer, uint256 prize);
    event PrizeClaimed(uint256 indexed ticketId, address indexed claimer, uint256 prize);

    constructor(uint256 _ticketPrice) {
        ticketPrice = _ticketPrice;
    }

    function buyTicket() external payable {
        require(msg.value == ticketPrice, "Incorrect ETH sent");
        uint256 prize = calculatePrize();
        tickets[totalTickets] = Ticket(msg.sender, false, prize);
        emit TicketBought(totalTickets, msg.sender, prize);
        totalTickets++;
    }

    /**
     * @dev Calculates the prize for a ticket.
     * Uses a pseudo-random value (not secure for production) to set a multiplier between 50% and 150%.
     * This means the prize can be less than, equal to, or greater than the ticket price.
     */
    function calculatePrize() internal view returns (uint256) {
        // Get a pseudo-random number based on block properties and the current ticket count.
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, totalTickets)));
        
        // Get a percentage between 50 and 150.
        // random % 101 produces a number between 0 and 100.
        // Adding 50 shifts the range to 50...150.
        uint256 percentage = 50 + (random % 101);
        
        // Calculate the prize based on the ticket price.
        return (ticketPrice * percentage) / 100;
    }

    function checkTicket(uint256 ticketId) external view returns (address, bool, uint256) {
        Ticket memory ticket = tickets[ticketId];
        return (ticket.owner, ticket.claimed, ticket.prize);
    }

    function claimPrize(uint256 ticketId) external {
        Ticket storage ticket = tickets[ticketId];
        require(msg.sender == ticket.owner, "Not ticket owner");
        require(!ticket.claimed, "Prize already claimed");
        ticket.claimed = true;
        payable(ticket.owner).transfer(ticket.prize);
        emit PrizeClaimed(ticketId, msg.sender, ticket.prize);
    }
}
