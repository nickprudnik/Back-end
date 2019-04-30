const { saveTicket, getTicket } = require("../repositories/ticketRepo");

exports.saveTickets = async data => {
  try {
    return await saveTicket(data);
  } catch (err) {
    throw err;
  }
};

exports.getTickets = async data => {
  try {
    return await getTicket(data);
  } catch (err) {
    throw err;
  }
};
