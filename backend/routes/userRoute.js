import express from "express";
import { userRegisterAccount, userLoginAccount, userLogout } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/create-account", userRegisterAccount);
userRouter.post("/login", userLoginAccount);
userRouter.post("/logout", userLogout);

export default userRouter;