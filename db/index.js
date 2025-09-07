import mongoose from 'mongoose'
import { db_name } from '../constant.js'

const connectDB=async()=>{
    try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
    // console.log(connectionInstance);
    console.log(`MONGODB Connected ${connectionInstance.connection.host}`);
    
    } catch (error) {
        console.log(`mongo DB connection failed ${error}` );
        
    }
}
export default connectDB;