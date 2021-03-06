const Sequelize = require("sequelize");

const db = new Sequelize("userdb", "root", "0000", {
  host: "localhost",
  dialect: "mysql"
});

db.sync({
  force: false,
  logging: false
}).then(() => {
  console.log(`Database & tables created!`);
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
