const Ticket = require("../entities/Ticket");

class TicketService {
  constructor(ticketRepository, userRepository) {
    this.ticketRepository = ticketRepository;
    this.userRepository = userRepository;
  }

  async bookTicket(userId, trainId, seatNumber, price) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const ticket = new Ticket(
      null,
      userId,
      trainId,
      seatNumber,
      price,
      "booked"
    );

    await this.ticketRepository.bookTicket(ticket);

    return ticket;
  }
}

module.exports = TicketService;
