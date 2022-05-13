import express from "express";
import { OTPSender } from "../controller/OTPSender.js";
import { userLogIn, userSignUp } from "../controller/user.js";



const router = express.Router()

router.post('/signup', userSignUp)
router.post('/login', userLogIn);
router.post('/otp-sender', OTPSender);


export default router;