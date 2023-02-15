import mongoose from "mongoose";
import config from "./config.js";


export const start = async () => {
    const url = config.MONGODB_URL
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(url)
        console.log('✅ Database Connected Successfully');
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}