const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(MONGO_URL)
        console.log(`mongodb connect on ${conn.connection.host}`.green.underline)
        }
        catch(err){
        process.exit(1)
        }
}

module.exports = {
    connectDB
}
