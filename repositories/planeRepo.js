const PlaneShema = require("../models/planeModel");

exports.savePlane = async planeData => {
  const plane = new PlaneShema(planeData);
  return await plane.save();
};

exports.getPlane = async () => {
  return await PlaneShema.find({});
};
