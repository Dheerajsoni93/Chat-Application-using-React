const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");       //to hash the password
const validator = require("validator");     //to validate email and password
const jwt = require("jsonwebtoken");        //

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt
    
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user)
    return res
      .status(400)
      .json("User with the given email is already exist...");

  if (!name || !email || !password)
    return res.status(400).json("All fields are required...");

  if (!validator.isEmail(email))
    return res.status(400).json("email is invalid...");
  if (!validator.isStrongPassword(password))
    return res.status(400).json("password must be a strong password...");

    user = new userModel({name, email, password});

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();


};

module.exports = { registerUser };
