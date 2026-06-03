import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectMongodb } from "./config/mongodb.js";
import { connectCloudinary } from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();



//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());


//database calls;
await connectMongodb();
connectCloudinary();


//api endpoint
app.use("/api/user/", userRouter)


export default app;