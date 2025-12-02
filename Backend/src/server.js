require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

// const connectDB = require('./config/db');
// connectDB(process.env.MONGO_URI)
// const User = require('./models/user');
// console.log("User model loaded:", typeof User === 'function');
// const Item = require('./models/item');
// console.log("Item model loaded:", typeof Item === 'function');


app.get('', () => {

})

app.post('', () => {

})

app.put('', () => {

})

app.delete('', () => {

})


app.listen(3000)