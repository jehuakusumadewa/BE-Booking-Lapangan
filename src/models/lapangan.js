'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lapangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lapangan.init({
    nama_owner: DataTypes.STRING,
    nama_lapangan: DataTypes.STRING,
    tipe_lapangan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    status: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lapangan',
    underscored: true,
  });
  return lapangan;
};