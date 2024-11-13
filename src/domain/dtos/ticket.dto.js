class TicketDTO {
  constructor({ ticket_id, train_id, seat_number, price, status }) {
    this.ticket_id = ticket_id;
    this.train_id = train_id;
    this.seat_number = seat_number;
    this.price = price;
    this.status = status;
  }

  static fromDomain(ticket, options = {}) {
    const data = {
      ticket_id: ticket.ticket_id,
      train_id: ticket.train_id,
      seat_number: ticket.seat_number,
      price: ticket.price,
      status: ticket.status,
    };

    return new TicketDTO(data);
  }
}

module.exports = TicketDTO;
