const { savePlane, getPlane } = require("../repositories/planeRepo");

exports.savePlane = async data => {
  try {
    return await savePlane(data);
  } catch (err) {
    throw err;
  }
};

exports.getPlane = async data => {
  try {
    return await getPlane(data);
  } catch (err) {
    throw err;
  }
};
