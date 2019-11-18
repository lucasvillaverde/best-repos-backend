require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: (process.env.DB_DIALECT || 'mysql'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './__tests__/database.sqlite',
    define: {
        timestamps: true,
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci'
        },
        underscored: true,
    },
}