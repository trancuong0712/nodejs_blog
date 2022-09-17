const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Success connecting to MongoDB')
    } catch(err) {
        console.log('Error connecting to MongoDB!!!!!')
    }
}

module.exports = { connect }
