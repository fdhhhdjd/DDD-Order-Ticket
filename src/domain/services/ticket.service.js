const TicketDTO = require("../dtos/ticket.dto");
const Ticket = require("../entities/ticket.entities");

class TicketService {
  constructor(ticketRepository, userRepository) {
    this.ticketRepository = ticketRepository;
    this.userRepository = userRepository;
  }

  async bookTicket(userId, trainId, seatNumber, price) {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const ticketEntities = new Ticket({
      user_id: userId,
      train_id: trainId,
      seat_number: seatNumber,
      price: price,
      status: "booked",
    });

    const ticket = await this.ticketRepository.bookTicket(ticketEntities);

    return TicketDTO.fromDomain(ticket);
  }

  async getTicketById(ticketId) {
    const ticket = await this.ticketRepository.getTicketById(ticketId);

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    return TicketDTO.fromDomain(ticket);
  }
}

module.exports = TicketService;
