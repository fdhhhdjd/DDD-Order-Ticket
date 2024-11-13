const BookTicketUseCase = require("../../application/use-cases/book-ticket.use-case");

class TicketController {
  async bookTicket(req, res) {
    const { userId, trainId, seatNumber, price } = req.body;
    const bookTicketUseCase = new BookTicketUseCase();

    try {
      const ticket = await bookTicketUseCase.execute(
        userId,
        trainId,
        seatNumber,
        price
      );
      res.status(201).json(ticket);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = TicketController;
