const User = require("./User");
const Blog = require("./Blog");
const { DataTypes } = require("Sequelize");

Blog.belongsTo(User, {
    foreignKey: {
        name: "blog_user_id",
        allowNull: false,
        type: DataTypes.UUID,
    },
});

User.hasMany(Blog, {
    foreignKey: {
        name: "blog_user_id",
        onDelete: "CASCADE",
        type: DataTypes.UUID,
    },
});

module.exports = {
    User,
    Blog,
};
