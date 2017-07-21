'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    role: DataTypes.STRING,
    MantriId: DataTypes.INTEGER,
    OrangTuaId: DataTypes.INTEGER
  });

  User.associate = models => {
    User.belongsTo(models.Mantri);
    User.belongsTo(models.OrangTua);
  };

  return User;
};