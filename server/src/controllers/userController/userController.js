import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { generateOtp, sendEmail } from "../../utils/generateOtp.js";
import { User } from "../../models/userModels.js";
import { generateOtpEmail } from "./../../utils/generateOtp.js";
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
        .json({ success: false, message: "Please fill all fields." });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match." });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Generate OTP
    const otp = generateOtp();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    newUser.otp = otp;
    newUser.otpExpiry = otpExpiry;

    // Save the user to the database
    await newUser.save();

    // Generate tokens
    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    // Set cookies
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

    // Send OTP via email
    const emailSubject = "Your OTP Code";
    const emailHtml = generateOtpEmail(otp);
    await sendEmail(newUser.email, emailSubject, emailHtml);

    return res.status(201).json({
      success: true,
      message: "User registered successfully and OTP has been sent.",
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
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

export const createAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    // console.log("Refresh token ==>", refreshToken);

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token missing. Please log in again.",
      });
    }

    let refreshTokenVerified;
    try {
      refreshTokenVerified = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET_KEY
      );
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired refresh token. Please log in again.",
      });
    }

    const userId = refreshTokenVerified.user_id;

    // Generate new access token
    const newAccessToken = generateAccessToken(userId);

    res.cookie("accessToken", newAccessToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });

    // console.log("New access token generated and set:", newAccessToken);

    res.status(200).json({
      success: true,
      message: "Access token created successfully.",
      // accessToken: newAccessToken,
    });
  } catch (error) {
    console.error("Error in createAccessToken:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const fillUserProfile = async (req, res) => {
  try {
    const requiredFields = [
      "fullName",
      "address",
      "dateofBirth",
      "email",
      "mobile",
      "genter",
      "houseName",
      "LandMark",
      "pincode",
      "distict",
      "state",
    ];
    //for missing fields
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing fields: ${missingFields.join(", ")}`,
      });
    }

    const user = req.user;

    const userData = await User.findById(user.user_id);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    userData.fullName = req.body.fullName;
    userData.address = req.body.address;
    userData.dateofBirth = req.body.dateofBirth;
    userData.email = req.body.email;
    userData.mobile = req.body.mobile;
    userData.gender = req.body.genter;
    userData.houseName = req.body.houseName;
    userData.landMark = req.body.LandMark;
    userData.pincode = req.body.pincode;
    userData.district = req.body.distict;
    userData.state = req.body.state;

    await userData.save();

    return res.status(200).json({
      success: true,
      message: "User profile updated successfully.",
      userData,
    });
  } catch (error) {
    console.error("Error in fillUserProfile:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
