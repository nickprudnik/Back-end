const Airport = require("../models/airportModel");

exports.addAirport = async ctx => {
  const { name } = ctx.request.body;
  const airport = await Airport.findOne({
    name
  });
  if (airport) {
    ctx.status = 401;
    ctx.body = err;
  } else {
    ctx.status = 200;
    Airport.create({
      name
    });
    ctx.body = { message: "Airport created" };
  }

  //   const airport = new Airport.Airport(ctx.request.body)
  //     .save()
  //     .then(airport => ctx.status(200).json(airport))
  //     .catch(err => ctx.status(500).send(err.message));
};

exports.getAirports = ctx => {
  Airport.Airport.find()
    .exec()
    .then(airports => ctx.status(200).json(airports))
    .catch(err => ctx.status(500).send(err.message));
};
