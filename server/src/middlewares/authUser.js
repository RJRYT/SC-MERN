import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/generateUserToken.js";

export const authUser = (req, res, next) => {
  try {
    const { accessToken, refreshToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Access token missing. Please log in again.",
      });
    }

    let tokenVerified;

    try {
      tokenVerified = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET_KEY
      );
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        console.log("Access token expired");

        if (!refreshToken) {
          return res.status(403).json({
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
        } catch (refreshError) {
          return res.status(403).json({
            success: false,
            message: "Invalid or expired refresh token. Please log in again.",
          });
        }

        const newAccessToken = generateAccessToken(
          refreshTokenVerified.user_id
        );

        res.cookie("accessToken", newAccessToken, {
          sameSite: "None",
          secure: true,
          httpOnly: true,
        });

        console.log("New access token generated and set.");
        tokenVerified = jwt.verify(
          newAccessToken,
          process.env.JWT_ACCESS_SECRET_KEY
        );
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Invalid access token." });
      }
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
