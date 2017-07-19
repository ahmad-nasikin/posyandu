'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    role: DataTypes.STRING,
    Petugasid: DataTypes.INTEGER,
    OrtuId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};