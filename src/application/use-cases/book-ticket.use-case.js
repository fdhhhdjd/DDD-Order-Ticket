const TicketRepository = require("../../domain/repositories/ticket.repository");
const UserRepository = require("../../domain/repositories/user.repository");
const TicketService = require("../../domain/services/ticket.service");

class BookTicketUseCase {
  constructor() {
    this.ticketService = new TicketService(
      new TicketRepository(),
      new UserRepository()
    );
  }

  async execute(userId, trainId, seatNumber, price) {
    return await this.ticketService.bookTicket(
      userId,
      trainId,
      seatNumber,
      price
    );
  }
}

module.exports = BookTicketUseCase;
