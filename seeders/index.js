const seedUsers = require("./user-seeds");
const seedBlogs = require("./blog-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();

    await seedBlogs();

    console.log("Tables Seeded");
    process.exit(0);
};

seedAll();
