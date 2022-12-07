
const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.
        connect(url, {
            useNewUrlParser: true,
        }).then((conn) => {
            console.log('Connected to successfully')
        }).catch((err) => {
            console.error("error", err);
        })
}   

module.exports = connectDB;