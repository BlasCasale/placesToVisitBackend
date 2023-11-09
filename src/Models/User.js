const { DataTypes } = require('sequelize');

const UserFunc = (db) => {
    db.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
        {
            timestamps: false
        });
};

module.exports = UserFunc;