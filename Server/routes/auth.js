const router = require("express").Router() 
const User = require("../models/Users")


//Get back all the users
router.get('/notes', async (req,res) =>{
    try {
        const users =await User.find()
        res.json(users)
    }

    catch(err){
        res.json({message:err})
    }
})


//Create a new user
router.post('/createnote', async (req,res) =>{
    
    const user = new User({
        title: req.body.title,
        description: req.body.description,
       
    });
    try{
            const savedUser = await user.save()
            res.send(savedUser)
    }catch(err){
        res.status(400).send(err)
    }

})


//Specific user

router.get('/:noteId', async (req,res) =>{
   try{const user = await User.findById(req.params.userId)
   res.json(user)
   }

   catch(err){
       res.json({message: err})
   }
})



//Delete user

router.delete('/:noteId', async (req,res) => {

        try{
            const removedNote =await User.deleteOne({_id: req.params.noteId})
            res.json(removedNote)
        }

        catch(err){
            res.json({message: err})
        }

        

      

})

//Update user

router.patch('/:noteId', async (req,res) => {
    try{
        const updatedUser = await User.updateOne({_id:req.params.noteId}, 
                                                {$set: {title: req.body.title, description: req.body.description} })
        res.json(updatedUser)
    }

    catch(err){
        res.json({message:err})
    }
})
 


module.exports = router;