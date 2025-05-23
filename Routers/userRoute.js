import express from "express"
import { forgotPassword, getUser, userLogin, userRegister } from "../Controllers/authController.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/getdata",authMiddleware,getUser)
router.post("/forgot-password",forgotPassword)


export default router;