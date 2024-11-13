const Ticket = require("../../domain/entities/ticket.entities");
const TicketRepository = require("../../domain/repositories/ticket.repository");
const db = require("../database/db");

class TicketRepositoryImpl extends TicketRepository {
  async bookTicket(ticketData) {
    const query = `
      INSERT INTO tickets (user_id, train_id, seat_number, price, status)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const { rows } = await db.pool.query(query, [
      ticketData.userId,
      ticketData.trainId,
      ticketData.seatNumber,
      ticketData.price,
      ticketData.status,
    ]);

    return new Ticket(...rows[0]);
  }

  async getTicketById(ticketId) {
    const query = "SELECT * FROM tickets WHERE ticket_id = $1";
    const { rows } = await db.pool.query(query, [ticketId]);
    return rows.length ? new Ticket(...rows[0]) : null;
  }
}

module.exports = TicketRepositoryImpl;
