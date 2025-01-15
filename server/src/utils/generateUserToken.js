import jwt from "jsonwebtoken";

export const generateAccessToken = (user_id) => {
  try {
    const accessToken = jwt.sign(
      { user_id },
      process.env.JWT_ACCESS_SECRET_KEY,
      {
        expiresIn: "10s",
        // expiresIn: "15m",
      }
    );
    return accessToken;
  } catch (error) {
    console.error("Error generating access token:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const generateRefreshToken = (user_id) => {
  try {
    const refreshToken = jwt.sign(
      { user_id },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "10d" }
    );
    return refreshToken;
  } catch (error) {
    console.error("Error generating refresh token:", error);
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
