// import important parts of sequelize library
const { Model, DataTypes, Sequelize, UUIDV4 } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.user_password);
    }
}

// set up fields and rules for User model
User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                len: [4, 25],
                notNull: {
                    msg: "Please enter a username of at least 4 characters.",
                },
            },
        },

        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                notEmpty: true,
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.user_password = await bcrypt.hash(
                    newUserData.user_password,
                    10
                );
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.user_password = await bcrypt.hash(
                    updatedUserData.user_password,
                    10
                );
                return updatedUserData;
            },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;
