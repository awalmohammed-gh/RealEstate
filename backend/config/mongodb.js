import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectMongodb = async() =>{
   try {
    mongoose.connection.on("connected", () =>{
        console.log("mongodb is connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/real_estate_db`);
   } catch (error) {
    console.error(error);
   }
}