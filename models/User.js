// import important parts of sequelize library
const { Model, DataTypes, Sequelize, UUIDV4 } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for User model
User.init(
    {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        user_name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
            validate: {
                len: [4, 25],
                notNull: {
                    msg: "Username must have at least 4 characters",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
                notNull: {
                    msg: "Please enter a valid email.",
                },
            },
        },

        user_password: {
            type: DataTypes.STRING(35),
            allowNull: false,
            validate: {
                len: [8, 35],
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;
