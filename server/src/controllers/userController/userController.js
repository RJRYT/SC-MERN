import bcrypt from "bcrypt";
import validator from "validator";
import { User } from "../../models/userModels.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/generateUserToken.js";

export const userRegister = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "pleaase provide a valid email address",
      });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password does not match" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const user_id = newUser._id;

    //tokens generated
    const accessToken = generateAccessToken(user_id);
    const refreshToken = generateRefreshToken(user_id);

    //save to cookie
    res.cookie("accessToken", accessToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "pleaase provide a valid email address",
      });
    }

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    const passwordMatch = bcrypt.compareSync(password, userExist.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "password mismatch" });
    }

    const user_id = userExist._id;

    const accessToken = generateAccessToken(user_id);
    const refreshToken = generateRefreshToken(user_id);

    //save to cookie
    res.cookie("accessToken", accessToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });

    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const userProfile = async (req, res) => {
  try {
    const user = req.user;
    // console.log("Decoded token user===>", user);

    const { user_id } = user;

    const userData = await User.findById(user_id).select("-password");
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // console.log("User data from DB===>", userData);

    res.status(200).json({
      success: true,
      message: "User profile fetched sucessfully",
      data: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
