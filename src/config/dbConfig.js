const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';

async function dbConnect(){
    await mongoose.connect(url);
}

module.exports = dbConnect;