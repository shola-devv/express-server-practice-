console.log('Task Manager App');
require('dotenv').config();

const express = require('express');
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
const notFound = require('./middleware/not-found')

console.log(process.env.URI)
const port = process.env.PORT || 5000;

const app  = express()
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(express.static('./public'));
app.use(notFound)


//app.use(express.static('./public'))
app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );

/*
const connect  = async ()=>{
try {
    await connectDb(process.env.URI)
    app.listen('5000', console.log('server is listening on port 5000...'))
} catch (error) {
    console.log(error)

    }
}

connect()*/

