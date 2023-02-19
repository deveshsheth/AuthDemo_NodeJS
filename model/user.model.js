const Sequelize = require('sequelize');

const sequelize = require('../util/pgdb');

const Users = sequelize.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
    require:true
  },
  email: {
    type: Sequelize.STRING(40),
    allowNull: false,
    require: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  phoneno: {
    type: Sequelize.BIGINT,
    allowNull: false,
    require: true
  },
  gender:{
    type:Sequelize.STRING(10),
    allowNull:false,
    require:true
  },
  dob: {
    type: Sequelize.DATE,
    allowNull: false,
    require: true
  },
  // country: {
  //   type: Sequelize.STRING(15),
  //   allowNull: false,
  //   require: true,
  // },
  // address: {
  //   type: Sequelize.TEXT,
  //   allowNull: false,
  //   require: true
  // }
  
});

module.exports = Users;