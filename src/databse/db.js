import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI || "mongodb+srv://admin:6ddbUB3pbUTkQ3fi@cluster0.kj7sequ.mongodb.net/KHANA-E-KABA?retryWrites=true&w=majority"}/${process.env.DB_NAME || "KHANA-E-KABA"}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch (error) {
        console.log("mongoDB connection error" , error);
        process.exit(1)
    }
}

export default connectDB  