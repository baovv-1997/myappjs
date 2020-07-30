import express from "express";
import { createUser, updateUser } from "../controllers/user";

import validate from "../validator/validator";
import auth from "./../../src/controllers/auth";

const router = express.Router();

router.route("/users")
  .post(validate.validateRegisterUser(), createUser)

router.route("/user")
  .put(auth().authenticate(), updateUser);

export default router;
