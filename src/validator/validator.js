const { check } = require('express-validator');

let validateRegisterUser = () => {
  return [
    check('name', 'User Name does not Empty').not().isEmpty(),
    check('name', 'User Name more than 6 degits').isLength({ min: 6 }),
    check('email', 'Invalid does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('pass', 'Password more than 6 degits').isLength({ min: 6 }),
    check('confirm').custom((value, { req }) => {
      console.log("@value" + value + "@pass" + req.body.pass);
      if (value !== req.body.pass) {
        throw new Error('Password confirmation is incorrect');
      }else{
        return true;
      }
    })
  ];
}

let validateLogin = () => {
  return [
    check('user.email', 'Invalid does not Empty').not().isEmpty(),
    check('user.email', 'Invalid email').isEmail(),
    check('user.password', 'password more than 6 degits').isLength({ min: 6 })
  ];
}

let validate = {
  validateRegisterUser: validateRegisterUser,
  validateLogin: validateLogin
};

module.exports = validate;
