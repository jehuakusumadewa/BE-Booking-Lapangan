'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_main: {
        type: Sequelize.DATE
      },
      tanggal_booking: {
        type: Sequelize.DATE
      },
      id_lapangan: {
        type: Sequelize.INTEGER
      },
      nama_team: {
        type: Sequelize.STRING
      },
      jam_booking_mulai: {
        type: Sequelize.STRING
      },
      jam_booking_akhir: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      bukti: {
        type: Sequelize.STRING
      },
      no_wa: {
        type: Sequelize.INTEGER
      },
      nama_owner: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};