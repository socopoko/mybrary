const mongoose = require('mongoose')

const authoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Author', authoSchema)