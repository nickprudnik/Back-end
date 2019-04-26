const { saveTicket, getTicket } = require("../repositories/ticketRepo");

exports.saveTicket = async data => {
  try {
    await saveTicket(data);
  } catch (err) {
    throw err;
  }
};

exports.getTicket = async data => {
  try {
    return await getTicket(data);
  } catch (err) {
    throw err;
  }
};
