import jwt from "jsonwebtoken";
import { db } from "../db.js";
import "dotenv/config";

const login = async (req, res) => {
  const { username, password } = req.body;

  const exitstingUser = await db.users.findOne({ username });
  if (!exitstingUser) {
    return res.status(400).json({
      message: "Invaild account",
    });
  }
  const isMatchedPassword =
    password.toUpperCase() === exitstingUser.password.toUpperCase();

  if (!isMatchedPassword) {
    return res.status(400).json({
      message: "Password or email is not match",
    });
  }
  const payload = {
    id: exitstingUser._id,
    username: exitstingUser.username,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 10000,
  });
  res.status(200).json({
    message: "Login successfully",
    accessToken: token,
  });
};
const AuthController = {
  login,
};
export default AuthController;
