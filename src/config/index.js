module.exports = {
  database: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DATABASE: process.env.DB_NAME,
  },
  port: process.env.PORT,
};
