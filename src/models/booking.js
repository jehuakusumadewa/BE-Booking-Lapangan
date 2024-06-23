'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    tanggal_main: DataTypes.DATE,
    tanggal_booking: DataTypes.DATE,
    id_booking: DataTypes.INTEGER,
    nama_team: DataTypes.STRING,
    jam_booking_mulai: DataTypes.STRING,
    jam_booking_akhir: DataTypes.STRING,
    kategori: DataTypes.STRING,
    bukti: DataTypes.STRING,
    no_wa: DataTypes.INTEGER,
    nama_owner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'booking',
    underscored: true,
  });
  return booking;
};