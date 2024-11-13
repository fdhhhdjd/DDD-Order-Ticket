class Ticket {
  constructor(ticketId, userId, trainId, seatNumber, price, status) {
    this.ticketId = ticketId;
    this.userId = userId;
    this.trainId = trainId;
    this.seatNumber = seatNumber;
    this.price = price;
    this.status = status; // E.g., 'booked', 'pending', 'canceled'
  }
}

module.exports = Ticket;
