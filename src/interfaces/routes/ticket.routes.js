const express = require("express");
const TicketController = require("../controllers/ticket.controller");
const router = express.Router();

const ticketController = new TicketController();

router.post("/book", ticketController.bookTicket);
router.get("/book/:ticketId", ticketController.getTicketsById);

module.exports = router;
