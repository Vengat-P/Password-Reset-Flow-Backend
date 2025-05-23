import express from "express"
import { getUser, userLogin, userRegister } from "../Controllers/authController.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/getdata",authMiddleware,getUser)


export default router;