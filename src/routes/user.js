import express from "express";
import {createUser} from "../controllers/user";

import validate from "../validator/validator";

const router = express.Router();

router.route("/users")
  .post( validate.validateRegisterUser() , createUser)

export default router;
