import express from "express";
import { userProfile } from './../../controllers/userController/userController.js';
import { authUser } from './../../middlewares/authUser.js';



const router = express.Router();

router.get("/profile",authUser, userProfile);

export default router;
