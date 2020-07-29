import express from "express";
import { getNewUserForm, loginUser } from "../controllers/token";


const router = express.Router();

router.route('/token')
  .get(getNewUserForm)
  .post(loginUser)

export default router;