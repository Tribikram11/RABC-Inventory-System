
const mongoose = require('mongoose');

const connectDB = async(mongoURL) => {
    try{
         await mongoose.connect(mongoURL);
        console.log("MongoDB Connected Successfully");

    }
    catch(err){
        console.error("mongodb  not connected", err)
    }
}

module.exports = connectDB;
