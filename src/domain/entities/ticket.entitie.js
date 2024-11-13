class Ticket {
  constructor(id, status, userId = null) {
    this.id = id;
    this.status = status;
    this.userId = userId;
  }

  isAvailable() {
    return this.status === "available";
  }

  book(userId) {
    if (!this.isAvailable()) throw new Error("Ticket is already booked");
    this.status = "booked";
    this.userId = userId;
  }
}

module.exports = Ticket;
