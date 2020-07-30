import express from "express";
import { getNewUserForm, loginUser, logOut } from "../controllers/token";
import auth from "./../../src/controllers/auth";

const router = express.Router();

router.route('/token')
  .get(getNewUserForm)
  .post(loginUser)

router.route('/token/logout')
  .get(auth().authenticate(), logOut);
export default router;