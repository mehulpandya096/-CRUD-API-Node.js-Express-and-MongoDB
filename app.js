const express = require('express');
const app = express();
const task = require('./router/todoTask');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();


//* middleware 
app.use(express.static('./public')); // run the static file like html and css 
app.use(express.json());


//* task router middle
app.use(task);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen('9000', (error) => { 
            console.log('Server Started..' )
            if (error) throw error;
        })
    } catch (err) {
       console.error(err)
    }
}
start();

