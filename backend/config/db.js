const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb connected ${conn.connection.host}`.cyan.underline)
    } catch(err){
        console.log("Error -> ",err);
        process.exit(1)
    }
}

module.exports = connectDb;