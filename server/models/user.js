const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    }, 
    userName: {
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
    }, 
    pno: {
        type: Number,
        required: true
    }, 
    Address: {
        type: String,
        require: false,
    }
})

module.exports= mongoose.model('user', FormSchema)