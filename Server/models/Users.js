const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        
        

    },

    description:{
        type: String,
        
    },

   

    data: {
        type:Date,
        default: Date.now
    }
})



module.exports =  mongoose.model("Notes", noteSchema)