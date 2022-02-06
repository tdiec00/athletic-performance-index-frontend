import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import errorHandler from "../utilities/error.js";

const SALT_ROUNDS = 10;
const SECRET = process.env.SECRET || "Trung";

export const signUp = async (req, res) => {
  try {
    const {username, email, password, firstname, lastname} = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      firstname,
      lastname,
      email,
      password_digest,
    });
    await user.save();
    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(payload, SECRET);
    res.cookie("jwt", token, {maxAge: 840000});
    return res.json(errorHandler(false, "Signed up user", user));
  } catch (error) {
    console.log(error.message);
    return res.json(errorHandler(true, "Error signing up user"));
  }
};

export const signIn = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username: username}).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
      };
      const token = jwt.sign(payload, SECRET);
      res.cookie("jwt", token, {maxAge: 840000});
      return res.json(errorHandler(false, "Signed in user", user));
    } else {
      return res.json(errorHandler(true, "Invalid Credentials"));
    }
  } catch (error) {
    console.log(error.message);
    return res.json(errorHandler(true, "Error signing in user"));
  }
};

export const singOut = (req, res) => {
  res.cookie("jwt", "", {maxAge: 1}).redirect("/");
};
