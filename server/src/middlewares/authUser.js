import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/generateUserToken.js";

export const authUser = (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Access token missing. Please log in again.",
      });
    }

    const tokenVerified = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET_KEY
    );
    if (!tokenVerified) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token.",
      });
    }

    req.user = tokenVerified;

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error during auth." });
  }
};
