const seedCategories = require("./user-seeds");
const seedProducts = require("./blog-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();

    await seedBlogs();

    process.exit(0);
};

seedAll();
