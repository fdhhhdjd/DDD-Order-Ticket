class Ticket {
  constructor({
    ticket_id,
    user_id,
    train_id,
    seat_number,
    price,
    status,
    created_at,
    updated_at,
  }) {
    this.ticket_id = ticket_id;
    this.user_id = user_id;
    this.train_id = train_id;
    this.seat_number = seat_number;
    this.price = price;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

module.exports = Ticket;
