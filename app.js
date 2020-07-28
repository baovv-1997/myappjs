import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./src/routes/auth";
import indexRouter from "./src/routes/index";
import userRouter from "./src/routes/user";
import path from 'path';

export class App {
  constructor(port) {
    this.port = port;
    this.corsOptions = {
      origin: "http://localhost:3001"
    }
    this.app = express();
    this.settingPort();
    this.setBodyParser();
    this.setCors();
    this.setRoutes();
    this.setViews();
  }

  settingPort() {
    this.app.set("port", this.port || 3000);
  }

  setViews() {
    this.app.set('view engine', 'pug');
    this.app.set('views', './views/pages');
    this.app.use(express.static(path.resolve(__dirname, './views')))
  }

  setBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  setCors() {
    this.app.use(cors(this.corsOptions));
  }

  setRoutes() {
    this.app.use(indexRouter);
    this.app.use(userRouter);
    this.app.use(authRouter);
  }

  listen() {
    this.app.listen(
      this.app.get("port"),
      console.log(`Connect port ${this.app.get("port")}`)
    );
  }
}
