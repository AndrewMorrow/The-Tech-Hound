const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");
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

Comment.belongsTo(Blog, {
    foreignKey: {
        name: "comment_blog_id",
        type: DataTypes.UUID,
    },
});

Blog.hasMany(Comment, {
    foreignKey: {
        name: "comment_blog_id",
        type: DataTypes.UUID,
        onDelete: "CASCADE",
    },
});

Comment.belongsTo(User, {
    foreignKey: "comment_user_name",
    targetKey: "user_name",
});

module.exports = {
    User,
    Blog,
    Comment,
};
