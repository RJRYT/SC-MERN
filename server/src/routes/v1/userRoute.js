import express from "express";
import { authUser } from "./../../middlewares/authUser.js";
import {
  createAccessToken,
  fillUserProfile,
  userProfile,
} from "./../../controllers/userController/userController.js";
import {
  resendUserOtp,
  verifyUserOtp,
} from "../../controllers/userController/otpController.js";

const router = express.Router();

router.get("/reqtoken", createAccessToken);
router.get("/profile", authUser, userProfile);
router.post("/verifyotp", authUser, verifyUserOtp);
router.get("/resentotp", authUser, resendUserOtp);
router.post("/fillprofile", authUser, fillUserProfile);
export default router;
