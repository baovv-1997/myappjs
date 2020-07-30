import express from "express";
import { getIndex } from "../controllers/index";
import auth from "./../../src/controllers/auth";

const router = express.Router();

router.route("/")
  .get(auth().authenticate(), getIndex);

export default router;
