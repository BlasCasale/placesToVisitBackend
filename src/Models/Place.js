const { DataTypes } = require('sequelize');

const PlaceFunc = (db) => {
    db.define('Place', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        district: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        theme: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        review: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        visited: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        socialMedia: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            timestamps: false
        })
};

module.exports = PlaceFunc;