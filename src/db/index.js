import mongoose from "mongoose"
import {DBNAME} from '../constants.js'
const connectDB= async (params) => {
    try {
        const connectionInstance=  await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB;