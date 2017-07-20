'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bayi = sequelize.define('Bayi', {
    namabayi: DataTypes.STRING,
    kelamin: DataTypes.STRING,
    ttl: DataTypes.DATEONLY,
    OrtuId: DataTypes.INTEGER,
    MantriId: DataTypes.INTEGER
  });

  Bayi.associate = models => {
    Bayi.belongsTo(models.OrangTua);
    Bayi.belongsTo(models.Mantri);
    Bayi.belongsToMany(models.Vaksin, { through :
      'BayiVaksin'
    });
  };

  return Bayi;
};
