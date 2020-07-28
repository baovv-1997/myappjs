import { App } from './app';
const Sequelize = require("sequelize");
import db from "./src/database/connection";

const main = () => {
  const app = new App();

  db.sequelize.sync().then(() => {
    app.listen();
  }).catch((error) => {
    console.log(error);
  });
}

main();
