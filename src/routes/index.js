import express from "express";
import { getIndex } from "../controllers/index";

const router = express.Router();

router.route("/")
  .get(getIndex);

export default router;
