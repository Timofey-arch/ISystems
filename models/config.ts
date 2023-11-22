import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  password: "qwerty",
  database: "postgres",
  port: 5432,
  username: "postgres",
  logging: false,
});

export default sequelize;
