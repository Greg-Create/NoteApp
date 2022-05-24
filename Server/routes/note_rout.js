const router = require("express").Router() 
const Note = require("../models/Notes")
const verify = require('./verifyToken')


//Get back all the notes
router.get('/notes', verify, async (req,res) =>{
    try {
        // const notes =await Note.filter(note => note.userId === req.user._id)
        
        const notes = await Note.find({userId: {$eq: req.user._id}})
        res.json(notes) 
    }

    catch(err){
        res.json({err})
    }
})


//Create a new note
router.post('/createnote', verify, async (req,res) =>{
    
    const note = new Note({
        title: req.body.title,
        description: req.body.description,
        userId: req.user._id
       
    });
    try{
            const savedNote = await note.save()
            res.send(savedNote)
    }catch(err){
        res.status(400).send(err)
    }

})


//Specific user

router.get('/:noteId', async (req,res) =>{
   try{const note = await Note.findById(req.params.userId)
   res.json(note)
   }

   catch(err){
       res.json({message: err})
   }
})



//Delete user

router.delete('/:noteId', async (req,res) => {

        try{
            const removedNote =await Note.deleteOne({_id: req.params.noteId})
            res.json(removedNote)
        }

        catch(err){
            res.json({message: err})
        }

        

      

})

//Update user

router.patch('/:noteId', async (req,res) => {
    try{
        const updatedUser = await Note.updateOne({_id:req.params.noteId}, 
                                                {$set: {title: req.body.title, description: req.body.description} })
        res.json(updatedUser)
    }

    catch(err){
        res.json({message:err})
    }
})
 


module.exports = router;