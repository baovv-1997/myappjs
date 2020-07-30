const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

import db from "../database/connection";
import config from "../../config/config.json"

export default () => {
  const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: req => req.cookies.jwt,
  };
  // callback when find a token in header
  const jwtStrategy = new JwtStrategy(params, async (jwt_payload, done) => {
    // decoded token and return jwt_payload

    try {
      const user = await db.users.findByPk(jwt_payload.id)
      if (user) {
        return done(null, { id: user.id, email: user.email });
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  });

  passport.use(jwtStrategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      const response = passport.authenticate("jwt", { session: false, failureRedirect: "/token"});
      return response;
    },
  };
};
