const config = require('./config/environments');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('config.mysql.database', 'config.mysql.username', 'config.mysql.password', {
  host: 'local',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//   'node_api_codelab', // 데이터베이스 이름
//   'root', // 유저 명
//   'root', // 비밀번호
//   {
//     'host': 'localhost', // 데이터베이스 호스트
//     'dialect': 'mysql' // 사용할 데이터베이스 종류
//   }
// ); // database information


const User = sequelize.define('user', {
    name: Sequelize.STRING
  });

module.exports = {
sequelize: sequelize,
User: User
}
