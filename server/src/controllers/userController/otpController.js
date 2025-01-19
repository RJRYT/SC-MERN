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
        .json({ success: false, message: "Invalid user ID." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const cooldownPeriod = 60 * 1000; // 1 minute
    if (user.lastOtpSent && Date.now() - user.lastOtpSent < cooldownPeriod) {
      return res.status(429).json({
        success: false,
        message: "Please wait a while before requesting a new OTP.",
      });
    }

    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpires = otpExpiry;
    user.lastOtpSent = new Date();

    await user.save();

    const emailSubject = "Your OTP Code";
    const emailHtml = generateOtpEmail(otp);
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

    if (user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    if (user.otpExpires < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP has expired." });
    }

    // Clear OTP details after verification
    user.otp = undefined;
    user.otpExpires = undefined;
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
