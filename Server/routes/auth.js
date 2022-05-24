const router = require('express').Router();
const User = require("../models/Users")
const {registerValidation, loginValidation} = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')







router.post('/register', async (req, res) => {
   
   //Validate user data before creating new user

   const {error} = registerValidation(req.body)
   if (error) return res.status(400).send(error.details[0].message) 


   // Check if user in database

   const emailExists = await User.findOne({email:req.body.email})
   if( emailExists) return res.status(400).send('Email already exists')
  
  
   //Hash password (for security)

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(req.body.password, salt)
  
  
   //user registration request
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password:hashedPassword
    });
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    }

    catch(err){
        res.send(err)
    } 
}) 



//Login


router.post('/login', async (req,res) => {


    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

//Check if email  is in database
    const user = await User.findOne({email:req.body.email})
   if( !user) return res.status(400).send('Email doesnt exists')

//Check if password is correct

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('incorrect password')


//Create and assign an token

const token = jwt.sign({_id: user._id}, process.env.TOKENSECRET)


    res.header('auth-token', token).send(token)
})

module.exports= router