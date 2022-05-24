import React, { useState } from "react";
import "./newNote.css"
import {AiOutlineClose} from "react-icons/ai"
import Axios from "axios"
import axios from "axios";


function NewNote (props){

    
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
    
    const editNote =() =>{
        
      let note = {title, description}
      axios.patch(`http://localhost:3001/note/${props.id}`, note).then(
        console.log("succesfullly updted"),
        props.setTrigger(false)
      )

      .then(
        props.function,
        props.deactivateEdit(false)
      )

      .catch(error =>{
        console.error("there was an error", error)
    })
    }



  const submitNote = () => {

    const Note = {title: title, description: description}

    

    axios.post('http://localhost:3001/note/createnote', Note)
    .then(function () {
        console.log("Success Note Created")
        props.setTrigger(false)
        
    })
    .then(
        props.function
    )
        
    
    .catch(error =>{
        console.error("there was an error", error)
    })

  } 
    
  if(props.trigger){
  return(   
      
    (!props.type) ? 
        <div className='noteapp_NewNote__container ' id="header_container">
            
            
            <div className='noteapp_NewNote__content'> 
               
            <AiOutlineClose className="close" onClick={() => {props.setTrigger(false)} }/>
               
                <h1>Create New Note</h1>


                <div className="noteapp_NewNote__content_title">
                <label for="title">Title</label>
                <input type="text" placeholder="Enter Title"  id="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>

                <div className="noteapp_NewNote__content_description">
                <label for="description">Description</label>
                <input type="text" placeholder="Enter Description"  id="description"   value={description} onChange={(event) => setDescription(event.target.value)}/>
                </div>


                <button type="submit" className="noteapp_NewNote__content_button" onClick={submitNote}> Create Note</button>
            </div>
            
        </div>

    :<div className='noteapp_NewNote__container ' id="header_container">
            
            
    <div className='noteapp_NewNote__content'> 
       
    <AiOutlineClose className="close" onClick={() => {props.setTrigger(false)} }/>
       
        <h1>Edit Note</h1>


        <div className="noteapp_NewNote__content_title">
        <label for="title">Enter New Title</label>
        <input type="text" placeholder={title}  id="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>

        <div className="noteapp_NewNote__content_description">
        <label for="description">Enter New Description</label>
        <input type="text" placeholder={description}  id="description"   value={description} onChange={(event) => setDescription(event.target.value)}/>
        </div>


        <button type="submit" className="noteapp_NewNote__content_button" onClick={editNote}> Edit Note</button>
    </div>
    
</div>
    ) 
  }
}

export default NewNote