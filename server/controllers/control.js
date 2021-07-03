const User= require('../models/user.js')

exports.create = async(req, res) => {
    const user =new User({
        fname:req.body.fname,
        username : req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
    try {
        const a1 = await user.save()
        res.json(a1)
    } catch (err) {
        res.send('Error '+err)
    }
};

exports.findAll = async(req, res) => {
    try{
        const user = await User.find() 
        res.json(user) 
    }catch(err){
        res.send('Error '+err)
    }
};

exports.findOne = async (req, res) => {
    try{
        const user = await User.findById(req.params.id) 
        res.json(user) 
    }catch(err){
        res.send('Error '+err)
    }
};

exports.update = async (req, res) => {
    try{
        const user = await User.findById(req.params.id) 
        user.fname=req.body.fname,
        user.username = req.body.username,
        user.password= req.body.password,
        user.email= req.body.email
        const a1= await user.save()
        res.json(user) 
    }catch(err){
        res.send('Error '+err)
    }
};

exports.delete =async (req, res) => {
    try{
        const user = await User.findById(req.params.id) 
        const a1= await user.remove()
        res.json(user) 
    }catch(err){
        res.send('Error '+err)
    }
};