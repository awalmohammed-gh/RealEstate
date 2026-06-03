import express from "express";
import { userRegisterAccount, userLoginAccount, userLogout, isUserAuth, getUserData } from "../controllers/userControllers.js";
import { userAuth } from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/create-account", userRegisterAccount);
userRouter.post("/login", userLoginAccount);
userRouter.post("/logout", userLogout);
userRouter.get("/auth-status", userAuth, isUserAuth);
userRouter.get("/me", userAuth, getUserData);

export default userRouter;