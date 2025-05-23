import express from "express"
import { userRegister } from "../Controllers/authController.js";


const router = express.Router();

router.post("/register",userRegister);


export default router;