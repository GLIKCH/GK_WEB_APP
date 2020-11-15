var DataTypes = require("sequelize").DataTypes;
var _gkuserdata = require("./gkuserdata");

function initModels(sequelize) {
  var gkuserdata = _gkuserdata(sequelize, DataTypes);


  return {
    gkuserdata,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
