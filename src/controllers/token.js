import db from "../database/connection";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import config from "../../config/config.json"


export const getNewUserForm = (req, res) => {
  res.render("auth");
}

export const loginUser = async (req, res) => {
  // return res.send(req.body);
  const { email, pass } = req.body;
  const errors = [];
  if (!email) {
    errors.push({ param: "email", msg: "Email is not empty" })
  }
  if (!pass) {
    errors.push({ param: "pass", msg: "Pass is not empty" })
  }

  if (email && pass) {
    const user = await db.users.findOne({ where: { "email": email } });
    if (!user) {
      errors.push({ param: "email", msg: "Email does not exist" })
      return res.send({ errors: errors });
    }
    if (bcrypt.compareSync(pass, user.password)) {
      const payload = { id: user.id };
      // create a encoded token - default HS256
      const token = jwt.encode(payload, config.jwtSecret);
      res.cookie('jwt', token);
      return res.send({
        token: token,
      });
    } else {
      errors.push({ param: "pass", msg: "Password is incorrect" })
      return res.send({ errors: errors });
    }
  }
  return res.send({ "errors": errors });
}


export const logOut = (req, res) => {
  res.clearCookie('jwt');
  return res.redirect("/token");
}
