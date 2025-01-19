import {
  generateOtp,
  generateOtpEmail,
  sendEmail,
} from "../../utils/generateOtp.js";
import { User } from "../../models/userModels.js";

export const resendUserOtp = async (req, res) => {
  try {
    const userId = req.user?.user_id;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Rate limiting for OTP resending
    const cooldownPeriod = 1 * 60 * 1000; // 1 minute
    if (user.lastOtpSent && Date.now() - user.lastOtpSent < cooldownPeriod) {
      return res.status(429).json({
        success: false,
        message: "Please wait before requesting another OTP.",
      });
    }

    // Generate OTP
    const otp = generateOtp();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    user.lastOtpSent = Date.now();
    await user.save();

    // Send OTP email
    const emailSubject = "Your OTP Code";
    const emailHtml = generateOtpEmail(user.name, otp);
    await sendEmail(user.email, emailSubject, emailHtml);

    return res.status(200).json({
      success: true,
      message: "OTP has been sent to your email.",
    });
  } catch (error) {
    console.error("Error in resendUserOtp:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const verifyUserOtp = async (req, res) => {
  try {
    const userId = req.user?.user_id;
    const { otp } = req.body;

    if (!otp) {
      return res
        .status(400)
        .json({ success: false, message: "OTP is required." });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Check if OTP matches and is not expired
    if (user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    if (user.otpExpiry < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP has expired." });
    }

    // OTP is valid; clear the OTP and expiry
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
    });
  } catch (error) {
    console.error("Error in verifyUserOtp:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
