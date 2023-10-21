const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../config");
let tokens = [];
const { models } = require("../../models/index");
function generateAccessToken(user) {
  return jwt.sign({ id: user.id }, config.jwt); //this sign will encrypt token with the user info
}
module.exports = {
  authenticateToken: async (req, res, next) => {
    //next is used for when a function has done its work go to next function
    const authHead = req.headers["authorization"];
    console.log(authHead);
    const token = authHead && authHead.split(" ")[1]; //split on the basis of space
    //[1] means that (userinfo,tokenencrpyt) to i want tokenencrypt
    if (!token) {
      return res.sendStatus(401); //unauthorized
    }
    jwt.verify(token, config.jwt, (err, user) => {
      //headers token and encrypted token
      console.log(err, user);
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; //user decoded data
      next(); // next function py chly jao
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body; //get email,password from body
    let user = await models.user.findOne({
      //get all properties of user table
      where: {
        email: email, //on the basic of email date retrievel
      },
    });
    console.log(user);
    user = user?.dataValues;
    if (user && bcrypt.compareSync(password, user.password)) {
      //actual password and crypted password compare those through compareSync
      //if user available or not
      const token = generateAccessToken(user);
      tokens.push(token);
      res.json({ token: token });
    } else {
      res.status(404).send("User Doesnot Exist");
    }
  },
};
