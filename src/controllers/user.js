const { validationResult } = require('express-validator');
import db from "../database/connection";

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() })
  }
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

export const updateUser = async (req, res) => {
  console.log("@data" + JSON.stringify(req.body) + "@user" + req.user.id);
  try {
    const user = await db.users.update(req.body, { where: {id: req.user.id} });
    res.send({"user": JSON.stringify(user)});
  } catch(err) {
    return res.send({ errors: err });
  }
}