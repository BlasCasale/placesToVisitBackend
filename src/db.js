const { Sequelize } = require('sequelize');
const { DB_URI } = process.env;
const UserFunc = require('./Models/User');
const PlaceFunc = require('./Models/Place');

// const db = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`,
//     { logging: false }
// );

const db = new Sequelize(DB_URI);

// con la autenticacion permito que los test corran de manera correcta

const connectToDatabase = async () => {
    try {
        await db.authenticate();
    } catch (error) {
        console.error('Error al conectar la base de datos', error)
    };
};

connectToDatabase();

UserFunc(db);
PlaceFunc(db);

const { User, Place } = db.models;

User.hasMany(Place);

Place.belongsTo(User, { timeStamps: false });

module.exports = {
    db,
    ...db.models
};