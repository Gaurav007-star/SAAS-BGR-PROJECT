import mongoose from "mongoose"


const DatabaseConnection = async()=>{
    try {
        const connection = mongoose.connect(process.env.MONGOOSE);
        console.log("Database connection successfully");
    } catch (error) {
        console.log("Failed to connect database || MEssage : ",error.message);
        
    }
}

export default DatabaseConnection;