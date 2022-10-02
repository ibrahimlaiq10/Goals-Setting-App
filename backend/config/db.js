const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(MONGO_URL)
        console.log(`mongodb connect on ${conn.connection.host}`.blue.underline)
        }
        catch(err){
            console.log("Mongoose connection failed", err.message);
        process.exit(1)
        }
}

module.exports = {
    connectDB
}
