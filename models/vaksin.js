'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vaksin = sequelize.define('Vaksin', {
    namavaksin: DataTypes.STRING,
    umurmin: DataTypes.INTEGER
  });

  Vaksin.associate = models => {
    Vaksin.belongsToMany(models.Bayi, { through :
      'BayiVaksin'
    });
  };

  return Vaksin;
};