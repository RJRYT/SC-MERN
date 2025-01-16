import express from "express";
import {
  createAccessToken,
  fillUserProfile,
  userProfile,
} from "./../../controllers/userController/userController.js";
import { authUser } from "./../../middlewares/authUser.js";

const router = express.Router();

router.get("/reqtoken", createAccessToken);
router.get("/profile", authUser, userProfile);
router.post("/fillprofile", authUser, fillUserProfile);
export default router;
