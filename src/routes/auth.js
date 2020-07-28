import express from "express";
import { getNewUserForm, createUser } from "../controllers/auth";


const router = express.Router();

router.route('/auth')
  .get(getNewUserForm)
  .post(createUser)

export default router;