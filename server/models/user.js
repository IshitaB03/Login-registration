const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true
    }, 
    password : {
        type: String,
        require : true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('user', FormSchema)