const Ticket = require("../models/ticketModel");

exports.saveTicket = async ticketData => {
  const ticket = new Ticket(ticketData);
  await ticket.save();
};

exports.getTicket = async () => {
  return await Ticket.find({});
};
