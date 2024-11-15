const TicketService = require("../../../domain/services/ticket.service");
const PostgresTicketRepository = require("../../../infrastructure/repositories/ticket.repository");
const PostgresUserRepository = require("../../../infrastructure/repositories/user.repository");

class GetTicketsByIdUseCase {
  constructor() {
    this.ticketService = new TicketService(
      new PostgresTicketRepository(),
      new PostgresUserRepository()
    );
  }

  async execute(ticketId) {
    return await this.ticketService.getTicketById(ticketId);
  }
}

module.exports = new GetTicketsByIdUseCase();
