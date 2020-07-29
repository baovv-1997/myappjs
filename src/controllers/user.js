const { validationResult } = require('express-validator');
import db from "../database/connection";

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() })
  }
  console.log("@no err");
  try {
    const user = await db.users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
    });
    return res.send(user);
  } catch(err) {
    return res.status(412).send({msg: err});
  }
}