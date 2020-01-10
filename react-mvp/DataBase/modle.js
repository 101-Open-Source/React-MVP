const { db,Sequelize } = require('./index.js')


const User = db.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username:{type: Sequelize.STRING, required: true, unique: true},
});



module.exports.User = User;
