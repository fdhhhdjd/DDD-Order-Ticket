const TicketService = require("../../../domain/services/ticket.service");
const TicketRepositoryImpl = require("../../../infrastructure/repositories/ticket.repository");
const PostgresUserRepository = require("../../../infrastructure/repositories/user.repository");

class BookTicketUseCase {
  constructor() {
    this.ticketService = new TicketService(
      new TicketRepositoryImpl(),
      new PostgresUserRepository()
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

module.exports = new BookTicketUseCase();
