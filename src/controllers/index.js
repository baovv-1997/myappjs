import db from "../database/connection";

export const getIndex = async (req, res) => {
  try {
    const user = await db.users.findByPk(req.user.id, {
      attributes: ["name", "email", "phone", "gender", "address", "nationality", "skill", "interests"]
    })
    console.log("@@000user", user);
    res.render('profile', {user: user});
  } catch(e) {
    res.status(412).json({ msg: error.message });
  }
 
};
