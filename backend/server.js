import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"

//app config
const app = express();



//middleware
app.use(express.json());
app.use(cors());


//database calls;


//api endpoint
app.get("/", (req,res) =>{
    res.json({message:"Welcome to nodejs"})
})


export default app;