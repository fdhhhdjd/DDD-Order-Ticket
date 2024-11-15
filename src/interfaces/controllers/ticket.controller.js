const bookTicketUseCase = require("../../application/use-cases/ticket/book-ticket.use-case");
const getTicketsByIdUseCase = require("../../application/use-cases/ticket/get-tickets-by-id.use-case");

class TicketController {
  async bookTicket(req, res) {
    const { userId, trainId, seatNumber, price } = req.body;

    try {
      const ticket = await bookTicketUseCase.execute(
        userId,
        trainId,
        seatNumber,
        price
      );
      res.status(201).json({
        message: "Ticket booked successfully",
        ticket,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getTicketsById(req, res) {
    const { ticketId } = req.params;

    try {
      const tickets = await getTicketsByIdUseCase.execute(ticketId);
      res.status(200).json({
        message: "Tickets retrieved successfully",
        tickets,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = TicketController;
